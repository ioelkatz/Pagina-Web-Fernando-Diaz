function WhatsAppButton() {
  const phoneNumber = "+598096111155";
  const message =
    "Hola Fernando, me gustaría conocer más sobre vuestros servicios. Mi nombre es...";

  return (
    <>
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          message
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "10px 16.5px",
          color: "white",
          backgroundColor: "#25D366",
          borderRadius: "50%",
          fontSize: "24px",
          textAlign: "center",
          zIndex: "1000",
          cursor: "pointer",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)" /* Small shadow */,
        }}
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </>
  );
}

export default WhatsAppButton;
