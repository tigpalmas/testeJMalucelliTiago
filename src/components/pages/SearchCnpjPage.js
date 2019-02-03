import React from 'react';
import {checkGreen, green, grey, purpleTitle} from "../common/colors/index";
import Button from '../common/Button'
import InputMaks from "../common/InputMask";
import UserHeader from "../pages/UserHeader";
import {cnpjServer} from "../common/constants/index";
import {connect} from 'react-redux';
import {fetch_cnpj} from "../../redux/actions";
import CircularIndeterminate from "../common/components/CircularIndeterminate"


class SearchCpfPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cnpj: '',
            messageErro: '',
            error: false,

        }
    }

    checkValidate = () => {
        const {cnpj} = this.state
        if (cnpj === cnpjServer) {

            return (
                <div style={{color: checkGreen, marginLeft: 10}}>
                    <i className={`check circle   icon large `}></i>
                </div>
            )
        }

    }

    onInputChange(event) {
        const {target: {value}} = event
        this.setState({cnpj: value, messageErro:'', error: false})
    }

    submitForm = () => {
        let numb = this.state.cnpj.split('.').join("")
        numb = numb.split('-').join("")
        numb = numb.split('/').join("")
        if(numb.length<14){
            this.setState({messageErro: 'Cnpj está Incompleto', error: true})
        }


        else if (this.state.cnpj != cnpjServer) {
            this.setState({messageErro: `CNPJ deve ser igual há:  ${cnpjServer}`, error: true})
        } else {
            let numb = this.state.cnpj.split('.').join("")
            numb = numb.split('-').join("")
            console.log(numb)

           this.props.fetch_cnpj(numb)
        }


    }

    render() {
        const {whiteContainer, titleStyle, inputContainer} = styles
        return (
            <div style={whiteContainer}>
                <UserHeader/>

                <div style={titleStyle}>Buscar por CNPJ ou empresa</div>

                <div style={inputContainer}>
                    <InputMaks
                        messageError={this.state.messageErro}
                        error={this.state.error}
                        value={this.state.cnpj}
                        onChange={(event) => this.onInputChange(event)}
                    />


                    {this.checkValidate()}

                </div>

                <div style={{marginBottom: 50}}>

                    {this.props.loading &&
                    <CircularIndeterminate/>
                    }

                    {!this.props.loading &&
                    <Button
                        onClick={this.submitForm}
                        labelColor={'white'}
                        background={green}
                        label={"OK"}
                    />
                    }

                </div>


            </div>
        )
    }
};

const styles = {

    whiteContainer: {
        display: 'flex', flexDirection: 'column',
        borderRadius: 10,
        alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'
    },
    titleStyle: {fontSize: 24, fontWeight: '700', marginTop: 80},
    inputContainer: {
        marginTop: 50,
        marginBottom: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }

};


const mapStateToProps = (state) => {
    return {
        loading: state.form.loading,
        cnpj: state.form.cnpj,
    }
}

export default connect(mapStateToProps, {fetch_cnpj})(SearchCpfPage);
