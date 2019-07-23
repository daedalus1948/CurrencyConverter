import React from 'react';

const withSpeechRecognition = (WrappedComponent) => {
    return class extends React.Component {
        
        constructor(props) {
            super(props);
            this.state = {
                SpeechRecognition: this.browserSupportedSpeechRecognition(),
                speechData: '',
                recognitionStarted: false
            };
            this.state.SpeechRecognition.addEventListener('result', this.onResultEvent);
            this.state.SpeechRecognition.addEventListener('end', this.onAudioEndEvent);
        }
  
        componentWillUnmount() {
            this.state.SpeechRecognition.removeEventListener('result', this.onAudioEvent);
            this.state.SpeechRecognition.removeEventListener('end', this.onAudioEndEvent);
        }

        browserSupportedSpeechRecognition () {
            if (window.webkitSpeechRecognition) {
                return new window.webkitSpeechRecognition();
            }
            if (window.SpeechRecognition) {
                return new window.SpeechRecognition();
            }
            return {start:()=>{}, addEventListener:()=>{}, removeEventListener:()=>{}}; // mock
        }
    
        onResultEvent = (event) => {
            this.setState({speechData:event.results[0][0].transcript});
        }

        onAudioEndEvent = (event) => {
            this.setState({recognitionStarted: false});
        }

        setSpeechData = (newData) => {
            this.setState({speechData:newData});
        }

        beginAudioDictation = () => {
            if (this.state.recognitionStarted) {
                return;
            }
            this.state.SpeechRecognition.start();
            this.setState({recognitionStarted: true});
        }

        render() {
            return (
                <WrappedComponent
                    beginDictation={this.beginAudioDictation}
                    speechData={this.state.speechData}
                    setSpeechData={this.setSpeechData}
                    {...this.props}
                />
            );
        }
    }
}

export default withSpeechRecognition;