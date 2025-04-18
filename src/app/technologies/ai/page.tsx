import React from "react";

import TechnologiesHero from "@/components/technologiesHero";
import ContactUs from "../components/contactUs";

const AIDevelopment = () => {
  return (
    <>
      <TechnologiesHero />

      {/* Introduction */}
      <div className=" bg-stone-950 text-white px-6 border-b-4 border-customRed">
        <div className="container mx-auto flex items-center justify-between space-x-8">
          <div className="flex-1">
            <div className="text-3xl mb-4">🤖🧠</div>
            <h1 className="text-4xl font-bold mb-4 text-customRed underline underline-offset-8">
              AI & Machine Learning Development
            </h1>
            <p className="mb-8">
              At Resonance3D, we leverage the power of Artificial Intelligence (AI) and Machine Learning (ML) to create cutting-edge solutions that enhance your business performance. From intelligent automation to predictive analytics, our AI and ML services are designed to help businesses unlock new levels of efficiency and innovation.
            </p>
            <p className="text-lg">
              Whether you&apos;re looking to implement AI-driven customer support, recommendation systems, or enhance decision-making with predictive analytics, we have the expertise to build customized AI and ML solutions tailored to your needs.
            </p>
          </div>

         <div className="flex-1">
                       <img
                         src="/images/ai/image-2-girl.jpg"
                         alt="AI Development"
                         className="w-full h-auto object-contain rounded-lg"
                        
                       />
                     </div>
        </div>
      </div>

      
      

      {/* Our AI & Machine Learning Services */}
      <div className=" bg-stone-950 text-white  px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-customRed underline underline-offset-8">
            Our AI & Machine Learning Services
          </h2>
          <p className="text-lg mb-6">
            We offer a wide range of AI and ML services designed to improve efficiency, enhance decision-making, and provide deep insights into your business operations. Our AI and ML solutions cover a variety of domains and industries, offering personalized experiences, automation, and smart insights.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI & ML Use Case 1 */}
            <div className="bg-stone-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-customRed">Intelligent Automation</h3>
              <p>
                Automate repetitive tasks and workflows with AI-driven solutions that streamline your processes, reduce human error, and improve operational efficiency.
              </p>
            </div>

            {/* AI & ML Use Case 2 */}
            <div className="bg-stone-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-customRed">Predictive Analytics</h3>
              <p>
                Use machine learning models to forecast future trends, customer behavior, and market changes. Make data-driven decisions with confidence by analyzing historical data and identifying patterns.
              </p>
            </div>

            {/* AI & ML Use Case 3 */}
            <div className="bg-stone-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-customRed">Natural Language Processing (NLP)</h3>
              <p>
                Leverage NLP for smarter communication. We build chatbots, sentiment analysis tools, and text-based data extraction solutions to help your business understand and interact with customers more effectively.
              </p>
            </div>

            {/* AI & ML Use Case 4 */}
            <div className="bg-stone-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-customRed">Computer Vision</h3>
              <p>
                Enhance your applications with computer vision, enabling them to recognize objects, analyze images, and automate visual inspection processes, driving innovation in manufacturing, healthcare, and retail industries.
              </p>
            </div>

            {/* AI & ML Use Case 5 */}
            <div className="bg-stone-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-customRed">AI-Powered Recommendation Systems</h3>
              <p>
                Improve customer experience by offering personalized recommendations based on user preferences, behaviors, and trends. We build powerful recommendation engines that increase customer engagement and sales.
              </p>
            </div>

            {/* AI & ML Use Case 6 */}
            <div className="bg-stone-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-customRed">AI in Healthcare</h3>
              <p>
                Revolutionize healthcare with AI solutions that support medical diagnostics, predictive health analytics, and patient monitoring, improving the quality of care and operational efficiency.
              </p>
            </div>

            {/* New Machine Learning Use Case 7 */}
            <div className="bg-stone-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-customRed">Supervised Learning & Classification</h3>
              <p>
                Leverage supervised learning techniques to classify data into predefined categories. We develop machine learning models for classification tasks, such as email filtering, fraud detection, and medical diagnosis.
              </p>
            </div>

            {/* New Machine Learning Use Case 8 */}
            <div className="bg-stone-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-customRed">Unsupervised Learning & Clustering</h3>
              <p>
                Use unsupervised learning techniques to uncover hidden patterns in your data. We apply clustering algorithms to group data into meaningful clusters, helping with customer segmentation, anomaly detection, and more.
              </p>
            </div>

            {/* New Machine Learning Use Case 9 */}
            <div className="bg-stone-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-customRed">Reinforcement Learning</h3>
              <p>
                We develop reinforcement learning models that optimize decision-making processes over time. This technique is ideal for applications such as robotics, game development, and autonomous vehicles.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AI & Machine Learning Technologies */}

      <div className=" bg-stone-950 text-white  px-6 relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{ backgroundImage: "url('/images/ai-back.jpg')" }}
        ></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-customRed underline underline-offset-8">
            AI & Machine Learning Technologies We Use
          </h2>
          <p className="text-lg mb-6">
            Our AI and Machine Learning solutions are powered by the latest technologies and frameworks to ensure high-quality, scalable, and efficient results. We use cutting-edge tools to implement machine learning models, natural language processing, and computer vision algorithms.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Technology 1 */}
            <div className="bg-stone-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-customRed">TensorFlow</h3>
              <p>
                TensorFlow is an open-source framework that enables the development and training of deep learning models. We use it to build neural networks for various AI applications, including image recognition, NLP, and predictive analytics.
              </p>
            </div>

            {/* Technology 2 */}
            <div className="bg-stone-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-customRed">PyTorch</h3>
              <p>
                PyTorch is a popular deep learning framework used to develop machine learning models. It&apos;s known for its flexibility and efficiency in building and training custom models.
              </p>
            </div>

            {/* Technology 3 */}
            <div className="bg-stone-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-customRed">OpenCV</h3>
              <p>
                OpenCV is a library designed for real-time computer vision. We use OpenCV to process images, detect objects, and build vision-based AI applications for industries like retail and healthcare.
              </p>
            </div>

            {/* Technology 4 */}
            <div className="bg-stone-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-customRed">NLTK</h3>
              <p>
                The Natural Language Toolkit (NLTK) is a powerful library for building NLP applications. We use it for sentiment analysis, text classification, and information extraction tasks.
              </p>
            </div>

            {/* Technology 5 */}
            <div className="bg-stone-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-customRed">Scikit-Learn</h3>
              <p>
                Scikit-learn is a simple and efficient machine learning library for Python. We use it for building predictive models, data mining, and analyzing large datasets.
              </p>
            </div>

            {/* Technology 6 */}
            <div className="bg-stone-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4 text-customRed">Keras</h3>
              <p>
                Keras is an easy-to-use neural network API for building deep learning models. It&apos;s a powerful tool that we use for rapid prototyping and model development in AI projects.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ContactUs  title=" For AI and ML "/>
    </>
  );
};

export default AIDevelopment;

