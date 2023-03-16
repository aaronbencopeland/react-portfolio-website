import React from 'react'

function Contact() {
  return (
    <>
      {/* Some useful stuff here: https://ordinarycoders.com/blog/article/react-bootstrap-forms */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          overflow: "hidden",
          backgroundColor: "black",
          height: "full",
          flex: 0.75,
          padding: 8,
          alignItems: "center"
        }}
      >
        <h3
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          Contact Me.
        </h3>

        <form 
          style={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            marginTop: 12,
            width: "fit-content",
          }}
        >
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <span
              style={{
                color: "white",
                fontWeight: 500,
                marginBottom: 4,
              }}
            >
              Name
            </span>

            <input
              style={{
                paddingTop: "1rem"/* 16px */,
                paddingBottom: "1rem"/* 16px */,
                paddingLeft: "1.5rem"/* 16px */,
                paddingRight: "1.5rem"/* 16px */,
                borderRadius: "0.5rem"/* 8px */,
                outline: "2px solid transparent",
                outlineOffset: "2px",
                borderStyle: "none",
                fontWeight: 500,
              }}
              type="text"
              placeholder="John Doe"
            />
          </label>

          <label
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <span
              style={{
                color: "white",
                fontWeight: 500,
                marginBottom: 4,
              }}
            >
              Email Address
            </span>

            <input
              style={{
                paddingTop: "1rem"/* 16px */,
                paddingBottom: "1rem"/* 16px */,
                paddingLeft: "1.5rem"/* 16px */,
                paddingRight: "1.5rem"/* 16px */,
                borderRadius: "0.5rem"/* 8px */,
                outline: "2px solid transparent",
                outlineOffset: "2px",
                borderStyle: "none",
                fontWeight: 500,
              }}
              type="text"
              placeholder="example@email.com"
            />
          </label>

          <label
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <span
              style={{
                color: "white",
                fontWeight: 500,
                marginBottom: 4,
              }}
            >
              Message
            </span>

            <textarea
              style={{
                paddingTop: "1rem"/* 16px */,
                paddingBottom: "1rem"/* 16px */,
                paddingLeft: "1.5rem"/* 16px */,
                paddingRight: "1.5rem"/* 16px */,
                borderRadius: "0.5rem"/* 8px */,
                outline: "2px solid transparent",
                outlineOffset: "2px",
                borderStyle: "none",
                fontWeight: 500,
              }}
              rows={7} cols={19}
              placeholder="Hi Aaron! 🐔"
            />
          </label>

          <button
            style={{
              paddingTop: "0.75rem"/* 12px */,
              paddingBottom: "0.75rem"/* 12px */,
              paddingLeft: "2rem"/* 32px */,
              paddingRight: "2rem"/* 32px */,
              outline: "2px solid transparent",
              outlineOffset: "2px",
              width: "fit-content",
              color: "#151030",
              fontWeight: "bold",
              borderRadius: "0.75rem"/* 12px */,
            }}
            type="submit"
            onClick={((e) => e.preventDefault())}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Contact