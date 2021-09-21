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