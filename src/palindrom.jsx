import React from 'react'

export const Palindrom = () => {
    const str="madam";
        const length =str.length;
        const sub=str.substring(0,3);
        const replaced =str.replace("mad","bad");
        const reversed =str.split("").reverse().join("");
        const ispalindrom = (str === reversed);
  return (
    <div>
        <h3> {str}</h3>
        <p>{length}</p>
        <p>{sub}</p>
        <p>{replaced}</p>
        <p>{ispalindrom ? "palindrome" :"not a plaindrome"}</p>
    </div>
  )
}
