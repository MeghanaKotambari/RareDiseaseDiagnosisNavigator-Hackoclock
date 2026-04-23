const Groq = require('groq-sdk').default || require('groq-sdk');

const getGroqClient = () => {
  if (!process.env.GROQ_API_KEY || process.env.GROQ_API_KEY === 'your_api_key_here') {
    throw new Error('GROQ_API_KEY is not configured. Please set a valid API key in your .env file.');
  }
  console.log('API Key present:', !!process.env.GROQ_API_KEY);
  const client = new Groq({
    apiKey: process.env.GROQ_API_KEY,
  });
  console.log('Groq client created:', !!client);
  return client;
};

const analyzeDiagnosis = async (symptoms, labs) => {
  try {
    const groq = getGroqClient();
    const labsString = typeof labs === 'object' ? JSON.stringify(labs) : labs;

    const prompt = `You are a medical AI specialized in rare diseases.
Analyze the patient symptoms and lab results.

Patient Symptoms:
${symptoms}

Lab Results:
${labsString}

Return ONLY valid JSON in this exact format without any markdown, code blocks, or extra text:
{
  "diagnoses": [
    {
      "name": "disease name",
      "confidence": "percentage like 85%",
      "reason": "brief explanation",
      "next_steps": "recommended steps"
    }
  ]
}

Give at least 5 possible rare diseases. Return ONLY the JSON.`;

    const message = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      max_tokens: 2048,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    // Extract the text content from the response
    const responseText = message.choices[0].message.content;

    // Parse the JSON response
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Invalid response format from Groq');
    }

    const parsedResponse = JSON.parse(jsonMatch[0]);

    // Validate the response structure
    if (!parsedResponse.diagnoses || !Array.isArray(parsedResponse.diagnoses)) {
      throw new Error('Response does not contain diagnoses array');
    }

    return parsedResponse;
  } catch (error) {
    console.error('Groq service error:', error);
    throw new Error(`Failed to analyze diagnosis: ${error.message}`);
  }
};

module.exports = {
  analyzeDiagnosis,
};
