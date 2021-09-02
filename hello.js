// var video, reqBtn, startBtn, stopBtn, ul, stream, recorder;




// function startCapture(displayMediaOptions) {
//     debugger
//     console.log(chrome.desktopCapture);

//     // chrome.runtime.sendMessage(chrome.runtime.id,{type:'getScreen', id: 1}, null,
//     //     function (data) {
//     //         if (data.sourceId === '') { // user canceled
//     //             // handle error
//     //         } else {
//     //             debugger
//     //             constraints.video.mandatory.chromeMediaSourceId = data.sourceId;
//     //             getUserMedia(constraints, callback);
//     //         }
//     //     }
//     // );
// //    return  navigator.getUserMedia({audio:true,video:true},(x)=>alert(x),(x)=>{alert(x)});
//     return navigator.mediaDevices.getDisplayMedia(displayMediaOptions)
//         .catch(err => { console.error("Error:" + err); return null; });
// }

// x = startCapture({audio: true,video:true});
// x.then(
//     (Vidstream) => {
//         stream = Vidstream;
//         navigator.getUserMedia({ audio: true }, function (audioStream) {
//             debugger
//             stream.addTrack(audioStream.getAudioTracks()[0]);
//             stream.addTrack(stream.getAudioTracks()[0].clone());
//             startRecording();
//         }, function (error) {
//             alert(error);
//         })
//         stream.getVideoTracks()[0].onended = function () {
//             // doWhatYouNeedToDo();
//             stopRecording()
//         };
//     }
// )

// function startRecording() {
//     recorder = new MediaRecorder(stream, {
//         mimeType: 'video/webm;codecs=vp9'
//     });
//     recorder.start();
//     // stopBtn.removeAttribute('disabled');
//     // startBtn.disabled = true;

// }




// function stopRecording() {
//     debugger
//     recorder.ondataavailable = e => {
//         debugger
//         //   ul.style.display = 'block';
//         var a = document.createElement('a'),
//             li = document.createElement('li');
//         a.download = ['video_', (new Date() + '').slice(4, 28), '.webm'].join('');
//         a.href = URL.createObjectURL(e.data);
//         a.textContent = a.download;
//         li.appendChild(a);
//         a.click();
//     };
//     recorder.stop();
//     // startBtn.removeAttribute('disabled');
//     // stopBtn.disabled = true;
// }