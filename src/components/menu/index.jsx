import React, { useState } from "react"
import './index.scss'


export default function Menu() {
    const [subNav, setSubNav] = useState(false)
    const [openMenu, setOpenMenu] = useState('sidebar close')
    function openClose(){
        if(openMenu === 'sidebar close'){
            setOpenMenu('sidebar')
        }else{
            setOpenMenu('sidebar close')
        }
    }
    function showSubNav(e){
        console.log(e.target.parentElement)
        
    }


    // let arrow = document.querySelectorAll(".arrow");
    // for (var i = 0; i < arrow.length; i++) {
    //     arrow[i].addEventListener("click", (e) => {
    //         let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
    //         arrowParent.classNameList.toggle("showMenu");
    //     });
    // }
    
    return (
        <div>
            <div className={openMenu}>
                <div className="logo-details">
                    <i className="bx bxl-c-plus-plus"></i>
                    <span className="logo_name">Logan</span>
                </div>
                <ul className="nav-links">
                <li>
                        <div className="iocn-link" onClick={(e) => showSubNav(e)}>
                            <a >
                                <i className="bx bx-collection"></i>
                                <span className="link_name">Produtos</span>
                            </a>
                            <i className="bx bxs-chevron-down arrow"></i>
                        </div>
                        <ul className={'sub-menu'}>
                            <li><a className="link_name">Produtos</a></li>
                            <li><a>Listar</a></li>
                            <li><a>Novo Produto</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <a>
                                <i className='bx bx-collection'></i>
                                <span className="link_name">Campanhas</span>
                            </a>
                            <i className="bx bxs-chevron-down arrow" ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name">Campanhas</a></li>
                            <li><a>Listar</a></li>
                            <li><a>Nova Camapanha</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <a>
                                <i className='bx bx-book-alt' ></i>
                                <span className="link_name">Ofertas</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name">Ofertas</a></li>
                            <li><a>Listar</a></li>
                            <li><a>Vantagens</a></li>
                            <li><a>Nova Oferta</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <a>
                                <i className='bx bx-book-alt'></i>
                                <span className="link_name">Assinaturas</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name">Assinaturas</a></li>
                            <li><a>Nova Assinatura</a></li>
                            <li><a>Cadastro simplificado</a></li>
                            <li><a>Últimas Assinaturas</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <a>
                                <i className='bx bx-book-alt' ></i>
                                <span className="link_name">Ofertas</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name">CRM</a></li>
                            <li><a>Gerenciar Assinatura</a></li>
                            <li><a>Consultar Tickets</a></li>
                            <li><a>Movimentaçôes</a></li>
                            <li><a>E-mails de Suporte</a></li>
                            <li><a>Fatura Comercial</a></li>
                            <li><a>Relatório</a></li>
                            <li><a>Criar usuário digital</a></li>
                            <li><a>Excluir Assinantes</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <a>
                                <i className='bx bx-book-alt' ></i>
                                <span className="link_name">Logística</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name">Logística</a></li>
                            <li><a>Relatório</a></li>
                            <li><a>Ticket</a></li>
                            <li><a>Hab. de Logradouro</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <a>
                                <i className='bx bx-book-alt' ></i>
                                <span className="link_name">Ações</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name">Ações em lote</a></li>
                            <li><a>Histórico</a></li>
                            <li><a>Abertura de Tickets</a></li>
                            <li><a>Movimentação Tickets</a></li>
                            <li><a>Cancelamentos</a></li>
                            <li><a>Suspensões</a></li>
                            <li><a>Dados Cadastrais</a></li>
                            <li><a>Endereçoes</a></li>
                            <li><a>Criação de assinatura</a></li>
                            <li><a>Alteração de Oferta</a></li>
                            <li><a>Integrações</a></li>
                            <li><a>Doação</a></li>
                            <li><a>Migração Cartoleiros</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <a>
                                <i className='bx bx-book-alt' ></i>
                                <span className="link_name">Relatórios</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name">Relatórios</a></li>
                            <li><a>Base de Assinantes</a></li>
                            <li><a>Títulos</a></li>
                            <li><a>Tickets</a></li>
                            <li><a>Ofertas</a></li>
                            <li><a>Login por Oferta</a></li>
                            <li><a>Wise Up - Lead</a></li>
                            <li><a>Usuários Duplicados</a></li>
                            <li><a>Assinatura Incompleta</a></li>
                            <li><a>Prospects</a></li>
                            <li><a>Integrações</a></li>
                            <li><a>Histórico Ofertas</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <a>
                                <i className='bx bx-book-alt' ></i>
                                <span className="link_name">Relatórios Fin</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name">Relatórios Fin</a></li>
                            <li><a>Nota Fiscal</a></li>
                            <li><a>NF Convênios</a></li>
                            <li><a>Perdas</a></li>
                            <li><a>Retorno bancário</a></li>
                            <li><a>Assinaturas por mês</a></li>
                            <li><a>Cobranças</a></li>
                            <li><a>Negociações</a></li>
                            <li><a>Cartões Vencidos</a></li>
                            <li><a>Débito com Erro</a></li>
                            <li><a>Recprrências Inativas</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <a>
                                <i className='bx bx-book-alt' ></i>
                                <span className="link_name">Relatórios Ger.</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name">Relatórios Ger.</a></li>
                            <li><a>Resumo de títulos</a></li>
                            <li><a>Faturamento</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <a>
                                <i className='bx bx-book-alt' ></i>
                                <span className="link_name">E-commerce</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name">E-commerce</a></li>
                            <li><a>Metadata</a></li>
                            <li><a>Live Panel</a></li>
                            <li><a>Live - Current(teste)</a></li>
                            <li><a>Live (teste)</a></li>
                            <li><a>Retenção de Email</a></li>
                            <li><a>User XP</a></li>
                            <li><a>User XP (Checkout)</a></li>
                            <li><a>Eleições 2018</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <a>
                                <i className='bx bx-book-alt' ></i>
                                <span className="link_name">Autenticação e seg.</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name">Autenticação e seg.</a></li>
                            <li><a>Usuários</a></li>
                            <li><a>Perfis</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <a>
                                <i className='bx bx-book-alt' ></i>
                                <span className="link_name">Vouchers</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow' ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name">Vouchers</a></li>
                            <li><a>Listar</a></li>
                            <li><a>Listar MGM/Indicados</a></li>
                            <li><a>Listar MGM/Premiação</a></li>
                            <li><a>Novo Voucher</a></li>
                        </ul>
                    </li>
                    
                    
                    {/* <li>
                        <div className="profile-details">
                            <div className="profile-content">
                            </div>
                            <div className="name-job">
                                <div className="profile_name">Prem Shahi</div>
                                <div className="job">Web Desginer</div>
                            </div>
                            <i className='bx bx-log-out' ></i>
                        </div>
                    </li> */}
                </ul>
            </div>
            <section className="home-section">
                <div className="home-content">
                    <i className='bx bx-menu' onClick={openClose}></i>
                    {/* <span className="text">Drop Down Sidebar</span> */}
                </div>
            </section>
        </div>
    )
}