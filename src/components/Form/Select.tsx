import { css } from '@emotion/react';
import { FormControl, FormLabel, Select as FormSelect, SelectProps as FormSelectProps } from '@chakra-ui/react';

interface SelectProps extends FormSelectProps {
  name: string;
  label?: string;
}

export function Select({ name, label, ...rest }: SelectProps) {
  return (
    <FormControl
      position="relative"
      bg="inherit"
    >
      {!!label && (
        <FormLabel
          htmlFor={name}
          position="absolute"
          top="-11px"
          left="12px"
          px="3px"
          color="gray.500"
          bg="inherit"
          zIndex="100"
          transition="0.25s"
          _focus={{
            color: "white"
          }}
        >
          {label}
        </FormLabel>
      )}

      <FormSelect
        id={name}
        name={name}
        {...rest}
        minWidth="32rem"
        variant="filled"
        bg="transparent"
        borderRadius="full"
        borderColor="gray.700"
        transition="0.25s"
        focusBorderColor="white"
        _hover={{
          borderColor: "gray.600",
        }}
        css={css`
          & option {
            background-color: #181B23;
            color: #616480;
          }
        `}
      />
    </FormControl>
  );
}