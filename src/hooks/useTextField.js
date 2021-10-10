import { useState, useCallback } from 'react';

/**
 * Custom hook to control a TextField.
 * @returns `[value, onChange]` 
 */
export default function useTextField(initialValue = '') {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(event => {
    setValue(event.target.value);
  }, []);

  return [value, onChange];
}
