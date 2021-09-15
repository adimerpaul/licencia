export default function () {
  return {
    status: '',
    token: localStorage.getItem('tokenvut2') || '',
    user : {},
    booluser : false,
    boolregtramite : false,
    boolform19 : false,
    direcciontrbutaria:false,
    infraestructura:false,
    seguridadciudadana:false,
    medioambiente:false,
    salubridad:false,
    activiadeseconomicas:false,
    consultartramite:false,
    entregartramite:false,
    pedido:[]
  }
}
