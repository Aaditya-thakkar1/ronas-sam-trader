export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #131313 0%, #2247b6 100%)",
      color: "white",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{fontSize: "3rem", margin:"0.5em 0"}}>Ronas–Sam Trader</h1>
      <h2 style={{fontWeight:500, marginBottom:"35px"}}>🚀 Modern Trading Tools • Crazy Smooth UX</h2>
      <p style={{fontSize:"1.2rem", maxWidth:480, textAlign:"center"}}>
        This site combines the data brilliance of <b>TradeWithSam</b> with the ultra-animated UI/UX polish of <b>Ronas IT</b>.<br/><br/>
        Stay tuned—legendary interactive experience loading soon!
      </p>
    </div>
  );
}
