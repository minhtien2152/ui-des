import { ReactNode, useRef } from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  InputGroup,
} from "@chakra-ui/react";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import { FiFile } from "react-icons/fi";

const FileUpload = (props) => {
  const { register, accept, multiple, children } = props;
  const inputRef = useRef();
  const { ref, ...rest } = register;

  const handleClick = () => inputRef.current?.click();

  return (
    <InputGroup onClick={handleClick}>
      <input
        type={"file"}
        multiple={multiple || false}
        hidden
        accept={accept}
        {...rest}
        ref={(e) => {
          ref(e);
          inputRef.current = e;
        }}
      />
      <>{children}</>
    </InputGroup>
  );
};

export default FileUpload;
