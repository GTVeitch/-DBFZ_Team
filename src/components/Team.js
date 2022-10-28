import React  from "react"
import CharNames from "./CharNames"
import CharImages from "./CharImages"
import CharRoles from "./CharRoles"
import RemoveButtons from "./RemoveButtons"

function Team( { teamChars , setTeamChars} ) {

    const assistArray = ["", "", ""]
    const charAssists = assistArray.map(() => {
        return (
            <td>
                <select>
                    <option className="A">A</option>
                    <option className="B">B</option>
                    <option className="C">C</option>
                </select>
            </td>
        )
    })

    const charStrengths = teamChars.map((char) => {
        const filler = char.strengths.keywords.sort().map((word) => {
            return (
                    <ul className="details">+{word}</ul>
            )
        })
        return (
            <td>{filler}</td>
        )
    })

    const charWeaknesses = teamChars.map((char)=>{
        const filler = char.weaknesses.keywords.sort().map((word) => {
            return (
                    <ul className="details">-{word}</ul>

            )
        })
        return (
            <td>{filler}</td>
        )
    })

    const teamStrengths = charStrengths.map((obj)=>{
        const filler = obj.props.children.map((obj2)=>{

            return <span className="details">{obj2.props.children}  </span>
        })
        return ( <div colSpan={3}>{filler}</div>)
    })

    const teamWeaknesses = charWeaknesses.map((obj)=>{
        const filler = obj.props.children.map((obj2)=>{
            return <span className="details">{obj2.props.children}  </span>
        })
        return ( <div colSpan={3}>{filler}</div>)
    })
    const overallW = teamWeaknesses.map((obj) => {
        const weaknessArray=obj.props.children.map((obj2) =>{
            return obj2.props.children[0][1]
        })
        return weaknessArray.sort()
    })
    const overallS = teamStrengths.map((obj) => {
        const strengthsArray=obj.props.children.map((obj2) =>{
            return obj2.props.children[0][1]
        })
        return strengthsArray.sort()
    })
    const flatStr = overallS.flat().sort()
    const flatWkn = overallW.flat().sort()
    const flawless = flatStr.filter((keyword) => !flatWkn.includes(keyword))
    const flaws = flatWkn.filter((keyword) => !flatStr.includes(keyword))
    const trueFlawless = [...new Set(flawless)]
    const trueFlaws = [...new Set(flaws)]
    const teamTrueFlawless = trueFlawless.map((word) => {
        return (
            <span className="details" key={word}>+{word}  </span>
        )
    })
    const teamTrueFlaws = trueFlaws.map((word) => {
        return (
            <span className="details" key={word}>-{word}  </span>
        )
    })

    return (
        <div className="tableHolder">
        <table className="teamCharTable">
            <tbody>
                <tr className="teamCharContainer">
                    <td> </td>
                    <td>Point</td>
                    <td>Mid</td>
                    <td>Anchor</td>
                </tr>
                <tr className="teamCharContainer">
                    <td>Name</td>
                    <CharNames teamChars={teamChars}/>
                </tr>
                <tr className="teamCharContainer">
                    <td>Image</td>
                    <CharImages teamChars={teamChars}/>
                </tr>
                <tr className="teamCharContainer">
                    <td>Assist</td>
                    {charAssists}
                </tr>
                <tr className="teamCharContainer">
                    <td>Strengths</td>
                    {charStrengths}
                    {charStrengths[0]?null:<td/>}
                    {charStrengths[1]?null:<td/>}
                    {charStrengths[2]?null:<td/>}
                </tr>
                <tr className="teamCharContainer">
                    <td>Weaknesses</td>
                    {charWeaknesses}
                    {charWeaknesses[0]?null:<td/>}
                    {charWeaknesses[1]?null:<td/>}
                    {charWeaknesses[2]?null:<td/>}
                </tr>
                <tr className="teamCharContainer">
                    <td>Preferred Role</td>
                    <CharRoles teamChars={teamChars}/>
                </tr>
                <tr className="teamCharContainer">
                    <td>Team Strengths</td>
                    <td colSpan={3}>{teamStrengths}</td>
                </tr>
                <tr className="teamCharContainer">
                    <td>Team Weaknesses</td>
                    <td colSpan={3}>{teamWeaknesses}</td>
                </tr>
                <tr className="teamCharContainer">
                    <td>Overall </td>
                    <td colSpan={3}>
                        <div>{teamTrueFlawless}</div>
                        <div>{teamTrueFlaws}</div>
                    </td>
                </tr>
                <tr className="buttonContainer">
                    <td>Remove</td>
                    <RemoveButtons teamChars={teamChars} setTeamChars={setTeamChars}/>
                </tr>
            </tbody>
        </table>
        <br></br>
        </div>

    )
}

export default Team;