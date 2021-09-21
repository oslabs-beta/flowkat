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

      return (
        <div className="menu-container">
          <button onClick={onClick} className="menu-trigger">
            <span>Query</span>
            <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg" alt="User avatar" />
          </button>
          <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
            <ul>
              <li><button onClick={onClickQuery} className="menu-trigger" value="kafka_cluster_partition_underreplicated">kafka_cluster_partition_underreplicated</button></li>
              <li><button onClick={onClickQuery} className="menu-trigger" value="kafka_cluster_partition_underreplicated">kafka_cluster_partition_underreplicated</button></li>
              <li><button onClick={onClickQuery} className="menu-trigger" value="kafka_cluster_partition_underreplicated">kafka_cluster_partition_underreplicated</button></li>
              <li><button onClick={onClickQuery} className="menu-trigger" value="kafka_cluster_partition_underreplicated">kafka_cluster_partition_underreplicated</button></li>
              <li><button onClick={onClickQuery} className="menu-trigger" value="kafka_cluster_partition_underreplicated">kafka_cluster_partition_underreplicated</button></li>
              <li><button onClick={onClickQuery} className="menu-trigger" value="kafka_cluster_partition_underreplicated">kafka_cluster_partition_underreplicated</button></li>
              <li><button onClick={onClickQuery} className="menu-trigger" value="kafka_cluster_partition_underreplicated">kafka_cluster_partition_underreplicated</button></li>
              <li><button onClick={onClickQuery} className="menu-trigger" value="kafka_cluster_partition_underreplicated">kafka_cluster_partition_underreplicated</button></li>
              <li><button onClick={onClickQuery} className="menu-trigger" value="kafka_cluster_partition_underreplicated">kafka_cluster_partition_underreplicated</button></li>
              <li><button onClick={onClickQuery} className="menu-trigger" value="kafka_cluster_partition_underreplicated">kafka_cluster_partition_underreplicated</button></li>
            </ul>
          </nav>
        </div>
      );
    };
 
export default DropdownMenu;