import React from 'react';

const TutorialPopup = ({ onClose }) => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center mx-10">
			<h2 className="font-bold text-lg mb-4">Welcome to my 3D portfolio !</h2>
			<p>Use your mouse to click and drag the island and navigate 🧭</p>
			<button className="mt-4 px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={onClose}>OK</button>
            </div>
        </div>
    );
};

export default TutorialPopup;