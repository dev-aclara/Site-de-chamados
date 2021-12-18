

import { useContext } from 'react';
import { Route, Redirect} from 'react-router-dom';
import { AuthContext } from '../contexts/auth';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}){

    const { signed, loading }  = useContext(AuthContext);

    
    if (loading){
        return(
            <div></div>
        )
    }

    // se não estiver logado e tentou acessar uma rota privada retorna para tela de login
    if(!signed && isPrivate){
        return <Redirect to="/" />
    }

    // se estiver logado e tentou ir para uma tela não privada vai para dashboard
    if(signed && !isPrivate){
        return <Redirect to="/dashboard" />
    }
    return(
        <Route
        {...rest}
        render= { props => (
            <Component {...props} />
        )}
        />
    )
}