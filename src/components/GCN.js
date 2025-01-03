import gcn from "../assets/gcn.png";
import result from "../assets/result.png"
import './GCN.css'; // Import the CSS file

function GCN() {
    return (
      <div classname="gcn-n">
        {/* Video */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '1vh'}}>
            <img
            src={gcn}
            width="400px" 
            height="600px"
            className="gcn-recording"
            />

            <img
            src={result}
            width="300px" 
            height="80px"
            className="gcn-recording"
            />
            </div>

        {/* Title */}
        <h1 className="gcn-title">Disease Prediction</h1>
        <div className="gcn-title-separator"></div>
        <div className="gcn-desc">
            This machine learning model utilizes Graph Convolutional Neural Networks to classify patient disease based on 
            unique symptology. This involves data pre-processing for unique relationships between disease and symptom, along with 
            DeepWalk node embeddings to represent these relationships. 
        </div>
        <div className="gcn-backend-title">1. Data Pre-Processing</div>
        <ul className="gcn-bullet-list">
            <li>Remove repetitive symptomology between conditions to focus on unique symptomology</li>
        </ul>
        <div className="gcn-backend-title">2. Node Embedding </div>
        <ul className="gcn-bullet-list">
            <li>Generate graph of condition to symptom mapping</li>
            <li style={{paddingTop: 10}}>Generate node embeddings based on latent space</li>
        </ul>
        <div className="gcn-backend-title">3. Model Training </div>
        <ul className="gcn-bullet-list">
            <li>Using 2-layer graph neural network with 16 nodes, train for 200 epochs </li>
            <li style={{paddingTop: 10}}>Minimize Negative Log Likelihood Loss</li>
        </ul>
        <div className="gcn-backend-title">4. Model Evaluation </div>
        <ul className="gcn-bullet-list">
            <li>Calculate training and test accuracy per epoch</li> 
        </ul>
        <div className="gcn-backend-title">Technology Used</div>
        <div className="gcn-tech-stack">
          <div className="gcn-tool-item">Python</div>
          <div className="gcn-tool-item">Sklearn</div>
          <div className="gcn-tool-item">Torch</div>
          <div className="gcn-tool-item">Pandas</div>
          <div className="gcn-tool-item">Numpy</div>
        </div>
      </div>
    );
}

export default GCN;
