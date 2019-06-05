import React from 'react';

export const CircleChart = props => (
    <svg {...props} >
        <circle cx="120" cy="123" r="108" stroke="#E4E6EE" strokeWidth="24" strokeLinecap="round"/>
        <path d="M120 15C136.566 15 152.91 18.8108 167.767 26.1377C182.625 33.4646 195.598 44.1112 205.682 57.2538C215.767 70.3964 222.693 85.6827 225.925 101.93C229.157 118.178 228.608 134.951 224.32 150.952C220.032 166.954 212.121 181.754 201.199 194.209C190.276 206.664 176.635 216.44 161.33 222.779C146.025 229.118 129.467 231.852 112.936 230.769C96.4061 229.685 80.3465 224.814 66 216.531"
              stroke="#65C690" strokeWidth="24" strokeLinecap="round"/>
        <circle opacity="0.2" cx="65.5" cy="216.5" r="5.5" fill="#474C58"/>
        <circle cx="120" cy="15" r="13.5" fill="#E4E6EE" stroke="white" strokeWidth="3"/>
        <path d="M12 123C12 95.5798 22.2186 70.5464 39.0554 51.5C58.8435 29.115 87.7734 15 120 15" stroke="#E4E6EE" strokeWidth="24" strokeLinecap="round"/>
    </svg>


);