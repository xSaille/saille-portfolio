import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'rag-chatbot',
    title: 'RAG ChatBot',
    description: 'Integration of Retrieval Augmented Generation (RAG) with Enterprise Data. This project leverages LangChain and LlamaIndex to enhance AI responses with accurate and relevant enterprise information.',
    technologies: [
      'Python',
      'LangChain',
      'LlamaIndex',
      'sentence-transformers',
      'Gradio',
      'Ollama',
      'PDF Processing',
      'Semantic Search',
      'Vector Embeddings'
    ],
    github: 'https://github.com/xSaille/RAG-ChatBot',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
    featured: true
  },  
  {
    id: 'custom-neural-network',
    title: 'Custom Neural Network',
    description: 'Implementation of a custom neural network from scratch, demonstrating deep understanding of neural network architecture, backpropagation, and optimization techniques.',
    technologies: [
      'Python',
      'NumPy',
      'ReLU Activation',
      'Dropout',
      'Batch Normalization',
      'MNIST Dataset',
      'Jupyter Notebook',
      'Matplotlib'
    ],
    github: 'https://github.com/xSaille/Custom-Neural-Network',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    featured: true
  },
  {
    id: 'logistic-regression-pytorch',
    title: 'Logistic Regression using PyTorch',
    description: 'Implementation of logistic regression models using PyTorch, showcasing fundamental machine learning concepts and PyTorch framework proficiency.',
    technologies: [
      'Python',
      'PyTorch',
      'NumPy',
      'Binary Cross-Entropy Loss',
      'Custom Loss Functions',
      'Sigmoid Activation'
    ],
    github: 'https://github.com/xSaille/Logistic-Regression-using-PyTorch',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    featured: true
  },  
  {
    id: 'house-price-prediction',
    title: 'House Price Prediction Model',
    description: 'Machine learning model to predict house prices based on various features, implementing regression techniques and feature engineering.',
    technologies: [
      'Python',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Jupyter Notebook',
      'MLflow',
      'Matplotlib',
      'Seaborn',
      'XGBoost'
    ],
    github: 'https://github.com/xSaille/House-price-prediction-model',
    image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg'
  },  
  {
    id: 'delaney-solubility',
    title: 'Delaney Solubility Prediction Model',
    description: 'AI-driven predictive model for molecular solubility using the Delaney dataset, implementing advanced machine learning techniques.',
    technologies: [
      'Python',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Jupyter Notebook',
      'Matplotlib',
      'Linear Regression',
      'Random Forest'
    ],
    github: 'https://github.com/xSaille/Delaney-Solubility-Prediction-Model',
    image: 'https://images.pexels.com/photos/954585/pexels-photo-954585.jpeg',
    featured: true
  },  
  {
    id: 'startup-platform',
    title: 'Personal Start-up',
    description: 'Comprehensive business communication and management platform featuring CRM capabilities, project management tools, and AI-powered assistants.',
    technologies: [
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'REST API',
      'Spring Security',
      'JWT Authentication',
      'React',
      'Tailwind CSS',
      'WebSockets',
      'OpenAI API'
    ],
    github: '',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg'
  },  
  {
    id: 'minecraft-server',
    title: 'Custom Minecraft Server',
    description: 'Development of a custom Minecraft server with backend website integration, database management, and monetization features.',
    technologies: ['Java', 'PHP', 'MySQL', 'Server Administration'],
    github: '',
    image: 'https://logo.com/image-cdn/images/kts928pd/production/e1d61cc6d5f05c33c1cd0fbf96c51554671750ba-1140x620.png?q=72&fm=webp'
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};