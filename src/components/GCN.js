import gcn from "../assets/gcn.png";
import result from "../assets/result.png";
import './GCN.css';

function GCN() {
    return (
      <div className="gcn-container">
        {/* Main Content Container */}
        <div className="gcn-content">
          {/* Images */}
          <div className="gcn-images">
            <img 
              src={gcn} 
              alt="GCN Model Visualization" 
              className="gcn-recording" 
            />
            <img 
              src={result} 
              alt="GCN Model Results" 
              className="gcn-recording" 
            />
          </div>

          {/* Text Section */}
          <div className="gcn-text">
            <h1 className="gcn-title">Disease Prediction</h1>
            <div className="gcn-title-separator"></div>
            <p className="gcn-desc">
              This machine learning model utilizes Graph Convolutional Neural Networks to classify patient disease based on 
              unique symptology. This involves data pre-processing for unique relationships between disease and symptom, along with 
              DeepWalk node embeddings to represent these relationships. 
            </p>

            <div className="gcn-section">
              <h2 className="gcn-backend-title">1. Data Pre-Processing</h2>
              <ul className="gcn-bullet-list">
                <li>Remove repetitive symptomology between conditions to focus on unique symptomology</li>
              </ul>
            </div>

            <div className="gcn-section">
              <h2 className="gcn-backend-title">2. Node Embedding</h2>
              <ul className="gcn-bullet-list">
                <li>Generate graph of condition-to-symptom mapping</li>
                <li>Generate node embeddings based on latent space</li>
              </ul>
            </div>

            <div className="gcn-section">
              <h2 className="gcn-backend-title">3. Model Training</h2>
              <ul className="gcn-bullet-list">
                <li>Using a 2-layer graph neural network with 16 nodes, train for 200 epochs</li>
                <li>Minimize Negative Log Likelihood Loss</li>
              </ul>
            </div>

            <div className="gcn-section">
              <h2 className="gcn-backend-title">4. Model Evaluation</h2>
              <ul className="gcn-bullet-list">
                <li>Calculate training and test accuracy per epoch</li>
              </ul>
            </div>

            <h2 className="gcn-backend-title">Technology Used</h2>
            <div className="gcn-tech-stack">
              <div className="gcn-tool-item">Python</div>
              <div className="gcn-tool-item">Sklearn</div>
              <div className="gcn-tool-item">Torch</div>
              <div className="gcn-tool-item">Pandas</div>
              <div className="gcn-tool-item">Numpy</div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default GCN;
