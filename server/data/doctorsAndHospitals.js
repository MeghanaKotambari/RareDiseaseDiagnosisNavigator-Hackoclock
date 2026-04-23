// Comprehensive database of specialists and hospitals for rare diseases
// This data helps users find appropriate medical professionals

const doctorsAndHospitals = {
  // Systemic Lupus Erythematosus (SLE)
  "systemic lupus erythematosus": {
    specialists: [
      {
        name: "Dr. Sarah Mitchell",
        specialization: "Rheumatologist",
        experience: "15+ years in SLE management",
        hospital: "Apollo Hospitals",
        location: "New Delhi, India",
        contact: "+91-11-4141-1111",
        email: "dr.sarah@apollo.com"
      },
      {
        name: "Dr. Ramesh Sharma",
        specialization: "Autoimmune Disorders Specialist",
        experience: "12+ years",
        hospital: "Max HealthCare",
        location: "Mumbai, India",
        contact: "+91-22-6867-3000",
        email: "dr.ramesh@maxhealthcare.com"
      }
    ],
    hospitals: [
      {
        name: "Apollo Hospitals",
        location: "New Delhi, India",
        contact: "+91-11-4141-1111",
        specialization: "Rheumatology & Autoimmune Diseases",
        website: "www.apollohospitals.com"
      },
      {
        name: "Fortis Healthcare",
        location: "Bangalore, India",
        contact: "+91-80-3965-1234",
        specialization: "Immunology & Rheumatology",
        website: "www.fortishealthcare.com"
      }
    ],
    tests: "ANA, Anti-dsDNA, Anti-Smith antibodies, Complement levels"
  },

  // Ehlers-Danlos Syndrome
  "ehlers-danlos syndrome": {
    specialists: [
      {
        name: "Dr. Priya Gupta",
        specialization: "Geneticist - Connective Tissue Disorders",
        experience: "14+ years in EDS management",
        hospital: "AIIMS New Delhi",
        location: "New Delhi, India",
        contact: "+91-11-2658-8500",
        email: "dr.priya@aiims.edu"
      },
      {
        name: "Dr. Vikram Patel",
        specialization: "Clinical Geneticist",
        experience: "11+ years",
        hospital: "CMC Vellore",
        location: "Vellore, India",
        contact: "+91-416-228-2000",
        email: "dr.vikram@cmcvellore.ac.in"
      }
    ],
    hospitals: [
      {
        name: "AIIMS New Delhi",
        location: "New Delhi, India",
        contact: "+91-11-2658-8500",
        specialization: "Genetics & Rare Diseases",
        website: "www.aiims.edu"
      },
      {
        name: "CMC Vellore",
        location: "Vellore, India",
        contact: "+91-416-228-2000",
        specialization: "Genetic Disorders & Research",
        website: "www.cmcvellore.ac.in"
      }
    ],
    tests: "Genetic testing, Collagen analysis, Imaging studies"
  },

  // Marfan Syndrome
  "marfan syndrome": {
    specialists: [
      {
        name: "Dr. Anil Kumar",
        specialization: "Cardiologist - Genetic Heart Disorders",
        experience: "13+ years",
        hospital: "Apollo Hospitals",
        location: "Chennai, India",
        contact: "+91-44-2829-2829",
        email: "dr.anil@apollochennai.com"
      },
      {
        name: "Dr. Neha Verma",
        specialization: "Geneticist",
        experience: "10+ years",
        hospital: "Sir Ganga Ram Hospital",
        location: "New Delhi, India",
        contact: "+91-11-2547-7000",
        email: "dr.neha@gangaram.com"
      }
    ],
    hospitals: [
      {
        name: "Apollo Hospitals",
        location: "Chennai, India",
        contact: "+91-44-2829-2829",
        specialization: "Cardiology & Genetic Disorders",
        website: "www.apollohospitals.com"
      },
      {
        name: "NIMHANS",
        location: "Bangalore, India",
        contact: "+91-80-2699-5555",
        specialization: "Neurological & Genetic Conditions",
        website: "www.nimhans.ac.in"
      }
    ],
    tests: "Genetic testing (FBN1), Echocardiography, Eye examination"
  },

  // Myasthenia Gravis
  "myasthenia gravis": {
    specialists: [
      {
        name: "Dr. Rajesh Nair",
        specialization: "Neurologist - Neuromuscular Disorders",
        experience: "16+ years in MG management",
        hospital: "Manipal Hospitals",
        location: "Bangalore, India",
        contact: "+91-80-4165-2222",
        email: "dr.rajesh@manipal.com"
      },
      {
        name: "Dr. Deepa Singh",
        specialization: "Neuroimmunology Specialist",
        experience: "12+ years",
        hospital: "Fortis Healthcare",
        location: "Delhi, India",
        contact: "+91-11-4168-6000",
        email: "dr.deepa@fortis.com"
      }
    ],
    hospitals: [
      {
        name: "Manipal Hospitals",
        location: "Bangalore, India",
        contact: "+91-80-4165-2222",
        specialization: "Neurology & Neuromuscular Diseases",
        website: "www.manipalhospitals.com"
      },
      {
        name: "Lilavati Hospital",
        location: "Mumbai, India",
        contact: "+91-22-6765-0333",
        specialization: "Neurological Disorders",
        website: "www.lilavatihospital.com"
      }
    ],
    tests: "Antibody testing (AChR, MuSK), EMG/NCS, Edrophonium test"
  },

  // Sarcoidosis
  "sarcoidosis": {
    specialists: [
      {
        name: "Dr. Suresh Kumar",
        specialization: "Pulmonologist - Granulomatous Diseases",
        experience: "14+ years",
        hospital: "St. Stephen's Hospital",
        location: "New Delhi, India",
        contact: "+91-11-4148-8000",
        email: "dr.suresh@sstephens.com"
      },
      {
        name: "Dr. Ananya Deshpande",
        specialization: "Respiratory Medicine Specialist",
        experience: "11+ years",
        hospital: "Breach Candy Hospital",
        location: "Mumbai, India",
        contact: "+91-22-6167-0123",
        email: "dr.ananya@breachcandy.com"
      }
    ],
    hospitals: [
      {
        name: "St. Stephen's Hospital",
        location: "New Delhi, India",
        contact: "+91-11-4148-8000",
        specialization: "Pulmonology & Respiratory Diseases",
        website: "www.sstephens.com"
      },
      {
        name: "Sir HN Reliance Foundation Hospital",
        location: "Mumbai, India",
        contact: "+91-22-6918-0000",
        specialization: "Respiratory & Granulomatous Diseases",
        website: "www.reliance-foundation.org"
      }
    ],
    tests: "ACE levels, Calcium levels, Chest X-ray, PFTs, Biopsy"
  },

  // Behçet's Disease
  "behçet's disease": {
    specialists: [
      {
        name: "Dr. Arjun Reddy",
        specialization: "Rheumatologist - Vasculitis Specialist",
        experience: "13+ years",
        hospital: "Rainbow Hospitals",
        location: "Hyderabad, India",
        contact: "+91-40-2331-8888",
        email: "dr.arjun@rainbowhospitals.com"
      },
      {
        name: "Dr. Meera Joshi",
        specialization: "Ophthalmologist & Vasculitis Expert",
        experience: "10+ years",
        hospital: "LV Prasad Eye Institute",
        location: "Hyderabad, India",
        contact: "+91-40-3096-2020",
        email: "dr.meera@lvpei.org"
      }
    ],
    hospitals: [
      {
        name: "Apollo Hospitals",
        location: "Hyderabad, India",
        contact: "+91-40-2360-2020",
        specialization: "Rheumatology & Vasculitis",
        website: "www.apollohospitals.com"
      },
      {
        name: "LV Prasad Eye Institute",
        location: "Hyderabad, India",
        contact: "+91-40-3096-2020",
        specialization: "Ocular & Systemic Vasculitis",
        website: "www.lvpei.org"
      }
    ],
    tests: "Pathergy test, Ophthalmological examination, HLA-B51"
  },

  // Granulomatosis with Polyangiitis
  "granulomatosis with polyangiitis": {
    specialists: [
      {
        name: "Dr. Vikram Singh",
        specialization: "Rheumatologist - Vasculitis Specialist",
        experience: "15+ years in ANCA-associated vasculitis",
        hospital: "Apollo Hospitals",
        location: "New Delhi, India",
        contact: "+91-11-4141-1111",
        email: "dr.vikram@apollo.com"
      },
      {
        name: "Dr. Ritu Sharma",
        specialization: "Immunologist & Vasculitis Expert",
        experience: "12+ years",
        hospital: "PGIMER Chandigarh",
        location: "Chandigarh, India",
        contact: "+91-172-2745-585",
        email: "dr.ritu@pgimer.edu"
      }
    ],
    hospitals: [
      {
        name: "PGIMER",
        location: "Chandigarh, India",
        contact: "+91-172-2745-585",
        specialization: "Rheumatology & Vasculitis",
        website: "www.pgimer.edu"
      },
      {
        name: "Institute of Liver & Biliary Sciences",
        location: "New Delhi, India",
        contact: "+91-11-4682-2222",
        specialization: "Multi-organ Vasculitis Management",
        website: "www.ilbs.in"
      }
    ],
    tests: "c-ANCA, p-ANCA, PR3, MPO antibodies, Biopsy"
  },

  // Pemphigus Vulgaris
  "pemphigus vulgaris": {
    specialists: [
      {
        name: "Dr. Ravi Yadav",
        specialization: "Dermatologist - Autoimmune Skin Diseases",
        experience: "13+ years",
        hospital: "AIIMS New Delhi",
        location: "New Delhi, India",
        contact: "+91-11-2658-8500",
        email: "dr.ravi@aiims.edu"
      },
      {
        name: "Dr. Neelam Vaidya",
        specialization: "Clinical Dermatology Specialist",
        experience: "11+ years",
        hospital: "Seth GS Medical College",
        location: "Mumbai, India",
        contact: "+91-22-2414-6666",
        email: "dr.neelam@sgsmc.ac.in"
      }
    ],
    hospitals: [
      {
        name: "AIIMS New Delhi",
        location: "New Delhi, India",
        contact: "+91-11-2658-8500",
        specialization: "Dermatology & Autoimmune Diseases",
        website: "www.aiims.edu"
      },
      {
        name: "CMC Vellore",
        location: "Vellore, India",
        contact: "+91-416-228-2000",
        specialization: "Dermatology & Rare Skin Conditions",
        website: "www.cmcvellore.ac.in"
      }
    ],
    tests: "Direct immunofluorescence, Serology, Skin biopsy"
  },

  // Hereditary Angioedema
  "hereditary angioedema": {
    specialists: [
      {
        name: "Dr. Mahesh Gupta",
        specialization: "Allergologist & Immunologist",
        experience: "14+ years in hereditary conditions",
        hospital: "Max HealthCare",
        location: "New Delhi, India",
        contact: "+91-11-4141-1111",
        email: "dr.mahesh@maxhealthcare.com"
      },
      {
        name: "Dr. Sunita Sharma",
        specialization: "Clinical Immunologist",
        experience: "10+ years",
        hospital: "Manipal Hospitals",
        location: "Pune, India",
        contact: "+91-20-6630-2000",
        email: "dr.sunita@manipal.com"
      }
    ],
    hospitals: [
      {
        name: "Max HealthCare",
        location: "New Delhi, India",
        contact: "+91-11-4141-1111",
        specialization: "Immunology & Allergology",
        website: "www.maxhealthcare.com"
      },
      {
        name: "Manipal Hospitals",
        location: "Pune, India",
        contact: "+91-20-6630-2000",
        specialization: "Genetic & Immune Disorders",
        website: "www.manipalhospitals.com"
      }
    ],
    tests: "C1-inhibitor levels & function, Complement panel, Genetic testing"
  },

  // Primary Biliary Cholangitis
  "primary biliary cholangitis": {
    specialists: [
      {
        name: "Dr. Ashok Kapoor",
        specialization: "Hepatologist - Autoimmune Liver Diseases",
        experience: "15+ years",
        hospital: "Institute of Liver & Biliary Sciences",
        location: "New Delhi, India",
        contact: "+91-11-4682-2222",
        email: "dr.ashok@ilbs.in"
      },
      {
        name: "Dr. Priya Mittal",
        specialization: "Gastroenterologist & Hepatologist",
        experience: "12+ years",
        hospital: "Fortis Healthcare",
        location: "Mumbai, India",
        contact: "+91-22-6167-0123",
        email: "dr.priya@fortis.com"
      }
    ],
    hospitals: [
      {
        name: "Institute of Liver & Biliary Sciences",
        location: "New Delhi, India",
        contact: "+91-11-4682-2222",
        specialization: "Liver & Biliary Diseases",
        website: "www.ilbs.in"
      },
      {
        name: "Bombay Hospital",
        location: "Mumbai, India",
        contact: "+91-22-2206-7676",
        specialization: "Gastroenterology & Hepatology",
        website: "www.bombayhospital.com"
      }
    ],
    tests: "Anti-mitochondrial antibodies, LFTs, Liver biopsy"
  }
};

module.exports = doctorsAndHospitals;
