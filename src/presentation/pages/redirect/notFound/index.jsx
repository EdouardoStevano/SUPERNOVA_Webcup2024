import React from 'react'
import { Link } from 'react-router-dom'

// Style import
import "./style.scss"

const NotFoundPage = () => {
    return (
        <section class="page_404">
            <div class="container">
                <div class="row">	
                    <div class="col-sm-12 ">
                        <div class="col-sm-10 col-sm-offset-1  text-center">
                            <div class="four_zero_four_bg">
                                <h1 class="text-center ">404</h1>
                            </div>
                    
                            <div class="content_box_404">
                                <h3 class="h2">
                                    On dirait que vous êtes perdu
                                </h3>

                                <p>La page que vous recherchez n'est pas disponible !</p>
                    
                                <Link to={'/'} class="link_404">Retpur à la page d'accueil</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotFoundPage