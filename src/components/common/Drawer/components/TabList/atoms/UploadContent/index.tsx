import { Center, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

interface ImageFile extends File {
  preview: string;
}

export const UploadContent = () => {
  const [file, setFile] = useState<ImageFile>();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFile(
        Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0]),
        })
      );
    },
  });

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      if (file) {
        URL.revokeObjectURL(file?.preview);
      }
    },
    [file]
  );

  console.log(file);

  return (
    <>
      {file ? (
        <Center mt="8" border={"1px dashed white"}>
          <Image src={file?.preview} alt="Imagem carregada" />
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
