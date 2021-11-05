import React from "react";
import ContentComp from "./ContentComp";

export default function SkillsComp() {

    return (
        <div>
            <h1 className="text-center mb-5">My Skills</h1>
            <ContentComp name="Python" val="90"/>
            <ContentComp name="Javascript" val="85"/>
            <ContentComp name="HTML & CSS" val="85"/>
            <ContentComp name="PostgreSql" val="80"/>
            <ContentComp name="Mysql" val="80"/>
            <ContentComp name="Flask" val="75"/>
            <ContentComp name="React" val="75"/>
            <ContentComp name="Node Js" val="75"/>
        </div>
    )
}
