import { PlayIcon, XCircle } from "../assets/icons";
import Card from "./common/card";

export default function ActividadFor() {
    const actions = [
        {
            icon: <PlayIcon/>,
            onClickEvent: (event) => {
                alert('Its one way to show warnings messages. Replace this part')
                console.log(event)
            }
        },
        {
            icon: <XCircle/>,
            onClickEvent: () => {
                alert('remove')
            }
        }
    ]
    return(
        <div className="center-content">
            <Card {...{ title: 'Activity for loop', actions }}>
            <div style={{ background: "#EEEFF0", width: "80%", padding: "10px", borderRadius: "5px", marginBottom: "20px" }}>
                <pre>
                <strong style={{ fontSize: "25px", color: "#940904" }}>{"Paso 2. Completa la Sentencia\n"}</strong>
                <code>{"\n"}</code>
                <code>{"\n"}</code>
                <code>{"1  class ListarMatriz {\n"}</code>
                <code>{"2    public static void main(String[] args) {\n"}</code>
                <code>{"3        int[][] matriz = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\n"}</code>
                <code>{"4       System.out.println(\"La matriz es:\");\n"}</code>
                <code>{"5        // Iterar sobre las filas de la matriz\n"}</code>
                </pre>
                </div>
            </Card>
        {/* <div style="width: 150px; height: 100vh; background-color: #db3d44; position: absolute; top: 0px; right: 0px;">
                <ol style="padding-inline-start: 0px;">
                <li style={{ listStyle: 'none' }}>
                <a href="#"><svg fill="LightSlateGrey" stroke="DarkSlateGrey" strokeWidth={1} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                                clip-rule="evenodd" fill-rule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"></path>
                        </svg></a>
                        </li>
                        <li style={{ listStyle: 'none' }}>
                        <a href="#"><svg fill="LightSlateGrey" stroke="DarkSlateGrey" strokeWidth={1} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        clip-rule="evenodd" fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"></path>
                        </svg></a>
                        </li>
                        </ol>
                    </div> */}
                    </div>
    )
}