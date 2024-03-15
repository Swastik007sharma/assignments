import {} from "react";

function App() {
	return (
		<div>
			<OuterCard>
				<h1>Lokeshwar</h1>
        <div style={{fontSize:"25px", fontWeight:"500", margin:"10px 0 30px 0"}}> <SubText text={"A TA in 100xDevs Cohort 2.0"}></SubText></div>
				<div>
					<ButtonComponent innerText={"LinkedIn"}></ButtonComponent>
					<ButtonComponent innerText={"Twitter"}></ButtonComponent>
				</div>
        <h2>Interest</h2>
        <SubText text={"Iconic"}></SubText>
        <SubText text={"Open Source"}></SubText>
        <SubText text={"App"}></SubText>
			</OuterCard>
		</div>
	);
}
function OuterCard({ children }) {
	return (
		<div
			style={{
        borderStyle:"solid",
        borderColor:"gray",
				fontFamily: "serif",
				borderRadius: "10px",
				padding: "20px",
				display: "flex",
				flexDirection: "column",
				alignItems: "right",
				maxWidth: "500px",
        margin:"20",
        height:"400px"
			}}
		>
			{children}
		</div>
	);
}

function SubText({text}){
  return <div style={{fontSize:"25px", color:"GrayText", }}>
    {`${text}`}
  </div>
}


function ButtonComponent({ innerText }) {
	return (
		<button
			style={{
				backgroundColor: "blue",
				padding: "10px",
				margin: "5px",
				borderRadius: "5px",
				color: "white",
				fontSize: "20px",
			}}
		>{`${innerText}`}</button>
	);
}

export default App;
