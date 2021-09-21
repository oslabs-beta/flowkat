import React, { Component, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'

const DropdownMenu = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const [query, setQuery] = useState('');
    const onClick = () => setIsActive(!isActive);
    const onClickQuery = (e) =>{
        console.log(e.target.value)
        setQuery(e.target.value);
    }
    useEffect(() => {
        const pageClickEvent = (e) => {
            // If the active element exists and is clicked outside of
            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
              setIsActive(!isActive);
            }
          };
      
        // If the item is active (ie open) then listen for clicks
        if (isActive) {
          window.addEventListener('click', pageClickEvent);
        }
      
        return () => {
          window.removeEventListener('click', pageClickEvent);
        }
      
      }, [isActive]);