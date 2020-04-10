import React, { Component } from 'react'
import { IonItem, IonList, IonLabel, IonHeader } from '@ionic/react'

import './MiComponente.css'

export default class MiComponente extends Component {
    render() {
        console.log(this.props.var1)
        return (
            <div>
                <IonList>
                    <IonHeader className="miClase">{this.props.titulo}</IonHeader>
                    <IonItem>
                        <IonLabel>Hola me llamo {this.props.nombre}</IonLabel>
                    </IonItem>
                </IonList>

            </div>
        )
    }
}
