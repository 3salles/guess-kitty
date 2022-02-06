import { Center, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

export const UploadContent = () => {
  const [file, setFile] = useState<any>();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      const base64 = convertToBase64(acceptedFiles[0]);
      setFile(
        Object.assign(acceptedFiles[0], {
          base64: base64,
        })
      );
    },
  });

  const convertToBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        setFile(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <>
      {file ? (
        <Center mt="8" border={"1px dashed white"}>
          <Image src={file} alt="Imagem carregada" />
        </Center>
      ) : (
        <Center
          h={200}
          mt="8"
          p="4"
          border={"2px dashed white"}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <Text>Solte os arquivos aqui</Text>
          ) : (
            <Text>
              Arraste e solte o arquivo aqui, ou clique aqui para selecionar
              arquivos
            </Text>
          )}
        </Center>
      )}
    </>
  );
};
