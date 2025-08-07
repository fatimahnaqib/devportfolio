export const siteConfig = {
  name: "Fatimah Naqib",
  title: "Certified Data Engineer | Backend Developer",
  description: "Portfolio website of Fatimah Naqib",
  accentColor: "#1d4ed8",
  social: {
    email: "fatimahnaqib987@gmail.com",
    linkedin: "https://www.linkedin.com/in/fatimah-naqib-b103a3194/",
    github: "https://github.com/fatimahnaqib",
    resume: "/fatimaportfolio/FatimahNaqib_Resume.pdf"
  },
  aboutMe:
  "I am a certified Data Engineer with a strong backend development background in Python. I specialize in building scalable backend systems and developing robust data pipelines using Apache Airflow and Kafka. With hands-on experience in cloud-native tools like AWS and Docker, I am passionate about creating reliable, high-performance data platforms that enable data-driven decision-making and solve real-world problems.",
  skills: [
    "Python", "HTML", "XML", "JavaScript", "PHP", "Kotlin", "Bash",
    "MySQL", "PostgreSQL", "IBM DB2", "MongoDB", "Cassandra", "Apache Kafka", "Airflow",
    "Odoo", "React", "jQuery", "Meteor", "Bootstrap",
    "AWS", "Docker", "Odoo.sh", "Datadog", "Jira", "Asana", "Confluence",
    "Apache Spark", "ETL", "Data Pipelines",
    "Tableau", "Power BI",
    "Visual Studio", "Sublime Text", "PyCharm", "VSCode", "Eclipse",
    "Windows", "Linux"
  ],
  projects: [
    {
      name: "Wildfire Monitoring & Analysis Pipeline",
      description:
        "Real‑time wildfire monitoring pipeline using NASA FIRMS VIIRS, Apache Airflow, Kafka, PostgreSQL, Python, and Folium for geospatial visualization.",
      link: "https://github.com/fatimahnaqib/wildfire-monitoring-analysis",
      skills: ["Apache Airflow", "Kafka", "PostgreSQL", "Python", "Folium"],
    },
    {
      name: "Odoo ETL & Analytics Pipeline",
      description:
        "End‑to‑end ETL pipeline extracting data from Odoo 15 via XML‑RPC, transforming with Python, loading into PostgreSQL, and visualizing via Apache Superset. Dockerized and orchestrated with Airflow.",
      link: "https://github.com/fatimahnaqib/odooops-insight",
      skills: ["Odoo", "ETL", "Python", "PostgreSQL", "Superset", "Airflow", "Docker"],
    },
    {
      name: "GitHub Search API App",
      description:
        "Django‑based application for exploring GitHub repository data, with setup via virtualenv, migrations, and local server deployment.",
      link: "https://github.com/fatimahnaqib/github-searchAPI",
      skills: ["Django", "Python", "API", "Deployment"],
    },
  ],
  experience: [
    {
      company: "Twelve Fusion Studios",
      title: "Software Engineer",
      dateRange: "Jan 2024 – Present",
      bullets: [
        "Built and maintained backend services and RESTful APIs using Python (Flask, Django)",
        "Developed ETL pipelines and data workflows using Apache Airflow",
        "Integrated Docker and CI/CD pipelines to streamline deployment",
        "Worked with stakeholders to deliver clean, scalable backend solutions"
      ],
    },
    {
      company: "air up",
      title: "Software Engineer II",
      dateRange: "May 2022 – Dec 2023",
      bullets: [
        "Enhanced operational efficiency with Odoo modules (CRM, Sales, Accounting, etc.)",
        "Integrated Odoo with Shopify and 3PL providers to optimize logistics",
        "Built microservices using Kotlin, AWS, and Kubernetes",
      ],
    },
    {
      company: "Miller Media",
      title: "Software Engineer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Implemented connector modules between Odoo, SkuVault, and QuickBooks",
        "Developed custom Odoo modules and deployed them via odoo.sh",
        "Built e-commerce websites using WordPress + WooCommerce",
      ],
    },
    {
      company: "NETLINKS Ltd",
      title: "Software Engineer",
      dateRange: "Sep 2017 – Aug 2019",
      bullets: [
        "Developed front-end interfaces and backend modules using Python, XML, JavaScript",
        "Generated reports using QWeb and XlsxWriter",
        "Collaborated on system analysis and testing for enterprise applications",
      ],
    },
    {
      company: "ServiceRocket",
      title: "Application Support Engineer",
      dateRange: "Jul 2016 – Dec 2016",
      bullets: [
        "Provided real-time technical support for Atlassian products (JIRA, Confluence)",
        "Completed training in databases, Linux, problem solving, and soft skills",
      ],
    },
  ],
  education: [
    {
      school: "International Islamic University Malaysia (IIUM)",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "Nov 2012 – Oct 2016",
      achievements: [
        "Graduated with Honors (GPA: 3.7)",
        "Dean's List recipient",
        "Served as a C++ programming tutor"
      ],
    },
    {
      school: "Center for Foundation Studies (CFS IIUM)",
      degree: "Foundation in Computer Science",
      dateRange: "Nov 2010 – Oct 2011",
      achievements: [
        "Graduated with Honors (GPA: 3.7)",
        "Tutored peers in Calculus",
        "Served as class monitor, ensuring accountability and task completion during instructor absences"
      ],
    },
    {
      school: "Online Platform: Coursera",
      degree: "IBM Data Engineering Certificate",
      dateRange: "Issued Nov 2024",
      achievements: [
        "Completed a comprehensive certification program covering core data engineering tools and concepts",
        "Designed and deployed hands-on ETL pipelines using Apache Airflow, Kafka, and cloud services",
        "Analyzed large-scale datasets using Apache Spark and Hadoop for big data processing",
        "Applied machine learning techniques using PySpark for distributed model training",
        "Gained a solid foundation in data warehousing, data lakes, and modern data architecture"
      ],
    },
  ],
};
