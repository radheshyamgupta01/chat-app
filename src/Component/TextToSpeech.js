// import React, { useEffect } from 'react';

// const TextToSpeechComponent = ({ successMessage }) => {
// //   useEffect(() => {
// //     // Create a new instance of SpeechSynthesisUtterance
// //     const utterance = new SpeechSynthesisUtterance(successMessage);

// //     // Set properties to control speech
// //     utterance.rate = 1; // Speech rate (1 is the default)
// //     utterance.pitch = 1; // Speech pitch (1 is the default)
// //     utterance.volume = 1; // Speech volume (0 to 1)
// //     utterance.lang = 'en-US';
// //     utterance.voice = speechSynthesis.getVoices().find(voice => voice.name === 'Google US English Female');
// //     // Use the speech synthesis API to speak the text
// //     window.speechSynthesis.speak(utterance);

// //     // Log when the speech ends
// //     utterance.onend = () => {
// //       console.log('Speech ended');
// //     };

// //     // Cleanup: Cancel speech synthesis when the component unmounts
// //     return () => {
// //       window.speechSynthesis.cancel();
// //     };
// //   }, [successMessage]); // Include successMessage in the dependency array

//   return (
//     <div>
//       <p className="text-green-600 mt-1">{successMessage}</p>
//     </div>
//   );
// };

// export default TextToSpeechComponent;
import React, { useEffect } from 'react';

const TextToSpeechComponent = ({ successMessage }) => {
  useEffect(() => {
    const utterance = new SpeechSynthesisUtterance(successMessage);

  
    utterance.rate = 1; 
    utterance.pitch = 1; 
    utterance.volume = 1; 

    
    const femaleVoice = speechSynthesis.getVoices().find(voice => voice.name.includes('female') && voice.lang === 'en-US');

    if (femaleVoice) {
      utterance.voice = femaleVoice;
    } else {
     
      console.warn('Female voice not found. Falling back to default voice.');
    }

    
    window.speechSynthesis.speak(utterance);

    // Log when the speech ends
    utterance.onend = () => {
      console.log('Speech ended');
    };

   
    return () => {
      window.speechSynthesis.cancel();
    };
  }, [successMessage]); 

  return (
    <div>
      <p className="text-green-600 mt-1">
        {successMessage}
      </p>
    </div>
  );
};

export default TextToSpeechComponent;
