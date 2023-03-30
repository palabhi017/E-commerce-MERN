import React from 'react'
import { useRadio,Box } from '@chakra-ui/react'
const Radiocard = (props) => {

    const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()
  return (
    <Box as='label'>
      <input {...input} />
      <Box
        {...checkbox}
        cursor='pointer'
        bgColor={"#f2f2f2"}
        borderRadius="3px"
        
        _checked={{
          bg:'#000000'
          
          
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={2}
        py={2}
      >
        {props.children}
      </Box>
    </Box>
  )
}

export default Radiocard