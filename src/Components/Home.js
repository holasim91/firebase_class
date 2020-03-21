import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardContent>
                        React 및 Firbase기반의 워드클라우드 App
                    </CardContent>
                </Card>
            </div>
        )
    }
}
