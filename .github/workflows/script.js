{\rtf1\ansi\ansicpg1252\cocoartf2820
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww28600\viewh50640\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.getElementById("registrationForm").addEventListener("submit", function(event) \{\
    event.preventDefault();\
    const name = document.getElementById("name").value;\
    const address = document.getElementById("address").value;\
    const phone = document.getElementById("phone").value;\
    const email = document.getElementById("email").value;\
\
    document.getElementById("registrationForm").style.display = "none";\
    document.getElementById("confirmation").style.display = "block";\
    document.getElementById("output").innerText = `Name: $\{name\}\\nAddress: $\{address\}\\nPhone: $\{phone\}\\nEmail: $\{email\}`;\
\});\
}