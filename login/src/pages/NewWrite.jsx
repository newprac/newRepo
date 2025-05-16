import React, { useState } from "react";
import "./Pages.css";

const NewWrite = () => {
  const [text, setText] = useState("");
  const [files, setFiles] = useState([]);

  // 텍스트 입력
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // 파일 변경
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles([...files, ...selectedFiles]);
  };

  // 파일 삭제
  const handleFileRemove = (indexToRemove) => {
    setFiles(files.filter((_, index) => index !== indexToRemove));
  };

  // 폼 데이터 전송
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("content", text);
    files.forEach((file) => {
      formData.append("files", file); // 여러 파일을 "files" 필드에 추가
    });

    try {
      const response = await fetch("http://localhost:5000/api/posts", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (response.ok) {
        alert("제출되었습니다!");
        setText(""); // 텍스트 초기화
        setFiles([]); // 파일 초기화
      } else {
        alert("제출 실패: " + result.error);
      }
    } catch (error) {
      alert("서버 오류: " + error.message);
    }
  };

  return (
    <div className="new-write-container">
      <h1 className="new-write-title">새 글 작성</h1>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="내용을 입력하세요..."
        rows="5"
        className="new-write-textarea"
      ></textarea>
      <input
        type="file"
        multiple
        accept="image/*,video/*"
        onChange={handleFileChange}
        className="new-write-file-input"
      />
      <div className="new-write-preview-container">
        {files.map((file, index) => (
          <div key={index} className="new-write-preview-item">
            {file.type.startsWith("image/") && (
              <img
                src={URL.createObjectURL(file)}
                alt={`preview-${index}`}
                className="new-write-preview-image"
              />
            )}
            {file.type.startsWith("video/") && (
              <video
                src={URL.createObjectURL(file)}
                controls
                className="new-write-preview-video"
              />
            )}
            <p className="new-write-preview-text">{file.name}</p>
            <button
              onClick={() => handleFileRemove(index)}
              className="new-write-remove-button"
            >
              X
            </button>
          </div>
        ))}
      </div>
      <button onClick={handleSubmit} className="new-write-submit-button">
        제출
      </button>
    </div>
  );
};

export default NewWrite;
