import React from "react";
import { FcComments } from "react-icons/fc";
import { Container, FileInfo, Preview, Comment, Instruction } from "./styles";

const FileList = ({ files,sortear }) => (  

  <Container>   
    {files.map((uploadedFile, index) => (
      <li key={uploadedFile.id}>
        <FileInfo onClick={() => sortear(index+4)}>
          <Preview src={uploadedFile.preview} />
          <Comment>
            {uploadedFile.uploaded && <FcComments size={24} color="#78e5d5" />}    
            <strong>{index + 4}</strong>                      
          </Comment>
        </FileInfo>      
      </li>
    ))}
  </Container>
);

export default FileList;
