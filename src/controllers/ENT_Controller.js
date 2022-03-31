import { getConnection, sql, queries } from "../database";

export const getENT = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .query(queries.getAllENT);
        res.json(result.recordset);   
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}; 
export const postENT = async (req, res) => {
    let { IdFormato,IdContratista,IdSupervisor,IdResidente,RevisarIsometricoElec,RevisarDespieceElec,
      RevisarDiametroElec,UbicacionSalidasElec,CortesCajas,GuiadoPoliducto,RevisarIsometricoSani,RevisarDespieceSani,RevisarDiametroSani,UbicacionSalidasSani,PendienteMinTubo,PruebaFluidez,Gas,ConcretoBombeado,fcConcreto,Revenimiento,Cilindro7dias,Cilindro14dias,Cilindro28dias,CimbraBuenasCondiciones,MadrinasPerimetro,ContraflechaLosa,NivelacionCimbra,
      TaponearEnrase,UbicacionSalidas,RevisionConexiones,DiametrosTuberia,TipoTuberia,Encamisado,PruebaHidraulica,ModulacionVigueta,TipoMalla,TrabeLosa,VarillasTrabes,EstribosTrabes,RefuerzoMalla,RefuerzoEnCastillos,RefuerzoDeCastillos,Traslapes,Dobleces,Amarres,Anclajes,Calzado,Bayoneteo,
      UbicacionCastillosPretil,ContraventeoBAP,Vibrado,EspesorComprension,AcabadoAvionLosaCompacta,Curado,Geolocalizacion } = req.body;

    if(RevisarIsometricoElec == null) RevisarIsometricoElec = "";
    if(RevisarDespieceElec == null) RevisarDespieceElec = "";
    if(RevisarDiametroElec == null) RevisarDiametroElec = "";
    if(UbicacionSalidasElec == null) UbicacionSalidasElec = "";
    if(CortesCajas== null) CortesCajas = "";
    if(GuiadoPoliducto == null) GuiadoPoliducto = "";
    if(RevisarIsometricoSani == null) RevisarIsometricoSani = "";
    if(RevisarDespieceSani == null) RevisarDespieceSani = "";
    if(RevisarDiametroSani == null) RevisarDiametroSani = "";
    if(UbicacionSalidasSani == null) UbicacionSalidasSani = "";
    if(PendienteMinTubo == null) PendienteMinTubo = "";
    if(PruebaFluidez == null) PruebaFluidez = "";
    if(Gas == null) Gas = "";
    if(ConcretoBombeado == null) ConcretoBombeado = "";
    if(fcConcreto == null) fcConcreto = "";
    if(Revenimiento == null) Revenimiento = "";
    if(Cilindro7dias == null) Cilindro7dias = "";
    if(Cilindro14dias == null) Cilindro14dias = "";
    if(Cilindro28dias == null) Cilindro28dias = "";
    if(EnraseBlock == null) EnraseBlock = "";
    if(CimbraBuenasCondiciones == null) CimbraBuenasCondiciones = "";
    if(MadrinasPerimetro == null) MadrinasPerimetro = "";
    if(ContraflechaLosa == null) ContraflechaLosa = "";
    if(NivelacionCimbra == null) NivelacionCimbra = "";
    if(TaponearEnrase == null) TaponearEnrase = "";
    if(VerificarLosainclinada == null) VerificarLosainclinada = "";
    if(UbicacionSalidas == null) UbicacionSalidas = "";
    if(RevisionConexiones == null) RevisionConexiones = "";
    if(DiametrosTuberia == null) DiametrosTuberia = "";
    if(TipoTuberia == null) TipoTuberia = "";
    if(Encamisado == null) Encamisado = "";
    if(PruebaHidraulica == null) PruebaHidraulica = "";
    if(ModulacionVigueta == null) ModulacionVigueta = "";
    if(TipoMalla == null) TipoMalla = "";
    if(TrabeLosa == null) TrabeLosa = "";
    if(VarillasTrabes == null) VarillasTrabes = "";
    if(EstribosTrabes == null) EstribosTrabes = "";
    if(RefuerzoMalla == null) RefuerzoMalla = "";
    if(RefuerzoEnCastillos == null) RefuerzoEnCastillos = "";
    if(RefuerzoDeCastillos == null) RefuerzoDeCastillos = "";
    if(Traslapes == null) Traslapes = "";
    if(Dobleces == null) Dobleces = "";
    if(Amarres == null) Amarres = "";
    if(Anclajes == null) Anclajes = "";
    if(Calzado == null) Calzado = "";
    if(Bayoneteo == null) Bayoneteo = "";
    if(UbicacionCastillosPretil == null) UbicacionCastillosPretil = "";
    if(ContraventeoBAP == null) ContraventeoBAP = "";
    if(Vibrado == null) Vibrado = "";
    if(EspesorComprension == null) EspesorComprension = "";
    if(AcabadoAvionLosaCompacta == null) AcabadoAvionLosaCompacta = "";
    if(Curado == null) Curado = "";
    if(Geolocalizacion == null) Geolocalizacion = "";

    try {
        const pool = await getConnection();
        await pool.request()
        .input("IdFormato", sql.Int, IdFormato)
        .input("IdContratista", sql.Int, IdContratista)
        .input("IdSupervisor", sql.Int, IdSupervisor)
        .input("IdResidente", sql.Int, IdResidente)
        .input("RevisarIsometricoElec", sql.Int, RevisarIsometricoElec)
        .input("RevisarDespieceElec", sql.Int, RevisarDespieceElec)
        .input("RevisarDiametroElec", sql.Int, RevisarDiametroElec)
        .input("UbicacionSalidasElec", sql.Int, UbicacionSalidasElec)
        .input("CortesCajas", sql.Int, CortesCajas)
        .input("GuiadoPoliducto", sql.Int, GuiadoPoliducto)
        .input("RevisarIsometricoSani", sql.Int, RevisarIsometricoSani)
        .input("RevisarDespieceSani", sql.Int, RevisarDespieceSani)
        .input("RevisarDiametroSani", sql.Int, RevisarDiametroSani)
        .input("UbicacionSalidasSani", sql.Int, UbicacionSalidasSani)
        .input("PendienteMinTubo", sql.Int, PendienteMinTubo)
        .input("PruebaFluidez", sql.Int, PruebaFluidez)
        .input("Gas", sql.Int, Gas)
        .input("ConcretoBombeado", sql.Int, ConcretoBombeado)
        .input("fcConcreto", sql.Float, fcConcreto)
        .input("Revenimiento", sql.Float, Revenimiento)
        .input("Cilindro7dias", sql.Int, Cilindro7dias)
        .input("Cilindro14dias", sql.Int, Cilindro14dias)
        .input("Cilindro28dias", sql.Int, Cilindro28dias)
        .input("EnraseBlock", sql.Int, EnraseBlock)
        .input("CimbraBuenasCondiciones", sql.Int, CimbraBuenasCondiciones)
        .input("MadrinasPerimetro", sql.Int, MadrinasPerimetro)
        .input("ContraflechaLosa", sql.Int, ContraflechaLosa)
        .input("NivelacionCimbra", sql.Int, NivelacionCimbra)
        .input("TaponearEnrase", sql.Int, TaponearEnrase)
        .input("VerificarLosainclinada", sql.Int, VerificarLosainclinada)
        .input("UbicacionSalidas", sql.Int, UbicacionSalidas)
        .input("RevisionConexiones", sql.Int, RevisionConexiones)
        .input("DiametrosTuberia", sql.Int, DiametrosTuberia)
        .input("TipoTuberia", sql.Int, TipoTuberia)
        .input("Encamisado", sql.Int, Encamisado)
        .input("PruebaHidraulica", sql.Int, PruebaHidraulica)
        .input("ModulacionVigueta", sql.Int, ModulacionVigueta)
        .input("TipoMalla", sql.Int, TipoMalla)
        .input("TrabeLosa", sql.Int, TrabeLosa)
        .input("VarillasTrabes", sql.Int, VarillasTrabes)
        .input("EstribosTrabes", sql.Int, EstribosTrabes)
        .input("RefuerzoMalla", sql.Int, RefuerzoMalla)
        .input("RefuerzoEnCastillos", sql.Int, RefuerzoEnCastillos)
        .input("RefuerzoDeCastillos", sql.Int, RefuerzoDeCastillos)
        .input("Traslapes", sql.Int, Traslapes)
        .input("Dobleces", sql.Int, Dobleces)
        .input("Amarres", sql.Int, Amarres)
        .input("Anclajes", sql.Int, Anclajes)
        .input("Calzado", sql.Int, Calzado)
        .input("Bayoneteo", sql.Int, Bayoneteo)
        .input("UbicacionCastillosPretil", sql.Int, UbicacionCastillosPretil)
        .input("ContraventeoBAP", sql.Int, ContraventeoBAP)
        .input("Vibrado", sql.Int, Vibrado)
        .input("EspesorComprension", sql.Int, EspesorComprension)
        .input("AcabadoAvionLosaCompacta", sql.Int, AcabadoAvionLosaCompacta)
        .input("Curado", sql.Int, Curado)
        .input("Geolocalizacion", sql.Geography, Geolocalizacion)
        .query(queries.postNewENT) 
        res.json({IdFormato,IdContratista,IdSupervisor,IdResidente,RevisarIsometricoElec,RevisarDespieceElec,RevisarDiametroElec,UbicacionSalidasElec,CortesCajas,GuiadoPoliducto,RevisarIsometricoSani,RevisarDespieceSani,RevisarDiametroSani,UbicacionSalidasSani,PendienteMinTubo,PruebaFluidez,Gas,ConcretoBombeado,fcConcreto,Revenimiento,Cilindro7dias,Cilindro14dias,Cilindro28dias,CimbraBuenasCondiciones,MadrinasPerimetro,ContraflechaLosa,NivelacionCimbra,TaponearEnrase,UbicacionSalidas,RevisionConexiones,DiametrosTuberia,TipoTuberia,Encamisado,PruebaHidraulica,ModulacionVigueta,TipoMalla,TrabeLosa,VarillasTrabes,EstribosTrabes,RefuerzoMalla,RefuerzoEnCastillos,RefuerzoDeCastillos,Traslapes,Dobleces,Amarres,Anclajes,Calzado,Bayoneteo,UbicacionCastillosPretil,ContraventeoBAP,Vibrado,EspesorComprension,AcabadoAvionLosaCompacta,Curado,Geolocalizacion})
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const getENTById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.getENTById);
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const deleteENTById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.deleteENT);
  
      if (result.rowsAffected[0] === 0) return res.sendStatus(404);
  
      return res.sendStatus(204);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const updateENTById = async (req, res) => {
  const { IdFormato,IdContratista,IdSupervisor,IdResidente,RevisarIsometricoElec,RevisarDespieceElec,RevisarDiametroElec,UbicacionSalidasElec,CortesCajas,GuiadoPoliducto,RevisarIsometricoSani,RevisarDespieceSani,RevisarDiametroSani,UbicacionSalidasSani,PendienteMinTubo,PruebaFluidez,Gas,ConcretoBombeado,fcConcreto,Revenimiento,Cilindro7dias,Cilindro14dias,Cilindro28dias,CimbraBuenasCondiciones,MadrinasPerimetro,ContraflechaLosa,NivelacionCimbra,TaponearEnrase,UbicacionSalidas,RevisionConexiones,DiametrosTuberia,TipoTuberia,Encamisado,PruebaHidraulica,ModulacionVigueta,TipoMalla,TrabeLosa,VarillasTrabes,EstribosTrabes,RefuerzoMalla,RefuerzoEnCastillos,RefuerzoDeCastillos,Traslapes,Dobleces,Amarres,Anclajes,Calzado,Bayoneteo,UbicacionCastillosPretil,ContraventeoBAP,Vibrado,EspesorComprension,AcabadoAvionLosaCompacta,Curado,Geolocalizacion } = req.body;

  // validating
  if (RevisarIsometricoElec == null ||  RevisarDespieceElec == null ||  RevisarDiametroElec == null ||  UbicacionSalidasElec == null ||  CortesCajas == null ||  GuiadoPoliducto == null ||  RevisarIsometricoSani == null ||  RevisarDespieceSani == null ||  RevisarDiametroSani == null ||  UbicacionSalidasSani == null ||  PendienteMinTubo == null ||  PruebaFluidez == null ||  Gas == null ||  ConcretoBombeado == null ||  fcConcreto == null ||  Revenimiento == null ||  Cilindro7dias == null ||  Cilindro14dias == null ||  Cilindro28dias == null ||  CimbraBuenasCondiciones == null ||  MadrinasPerimetro == null ||  ContraflechaLosa == null ||  NivelacionCimbra == null ||  TaponearEnrase == null ||  UbicacionSalidas == null ||  RevisionConexiones == null ||  DiametrosTuberia == null ||  TipoTuberia == null ||  Encamisado == null ||  PruebaHidraulica == null ||  ModulacionVigueta == null ||  TipoMalla == null || TrabeLosa == null  ||  VarilasTrabes == null || EstribosTrabes == null ||   RefuerzoMalla == null ||  RefuerzoEnCastillos == null ||  RefuerzoDeCastillos == null ||  Traslapes == null ||  Dobleces == null ||  Amarres == null ||  Anclajes == null ||  Calzado == null ||  Bayoneteo == null ||  UbicacionCastillosPretil == null ||  ContraventeoBAP == null ||  Vibrado == null ||  EspesorComprension == null ||  AcabadoAvionLosaCompacta == null ||  Curado == null ||  Geolocalizacion) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("IdFormato", sql.Int, IdFormato)
        .input("IdContratista", sql.Int, IdContratista)
        .input("IdSupervisor", sql.Int, IdSupervisor)
        .input("IdResidente", sql.Int, IdResidente)
        .input("RevisarIsometricoElec", sql.Int, RevisarIsometricoElec)
        .input("RevisarDespieceElec", sql.Int, RevisarDespieceElec)
        .input("RevisarDiametroElec", sql.Int, RevisarDiametroElec)
        .input("UbicacionSalidasElec", sql.Int, UbicacionSalidasElec)
        .input("CortesCajas", sql.Int, CortesCajas)
        .input("GuiadoPoliducto", sql.Int, GuiadoPoliducto)
        .input("RevisarIsometricoSani", sql.Int, RevisarIsometricoSani)
        .input("RevisarDespieceSani", sql.Int, RevisarDespieceSani)
        .input("RevisarDiametroSani", sql.Int, RevisarDiametroSani)
        .input("UbicacionSalidasSani", sql.Int, UbicacionSalidasSani)
        .input("PendienteMinTubo", sql.Int, PendienteMinTubo)
        .input("PruebaFluidez", sql.Int, PruebaFluidez)
        .input("Gas", sql.Int, Gas)
        .input("ConcretoBombeado", sql.Int, ConcretoBombeado)
        .input("fcConcreto", sql.Float, fcConcreto)
        .input("Revenimiento", sql.Float, Revenimiento)
        .input("Cilindro7dias", sql.Int, Cilindro7dias)
        .input("Cilindro14dias", sql.Int, Cilindro14dias)
        .input("Cilindro28dias", sql.Int, Cilindro28dias)
        .input("EnraseBlock", sql.Int, EnraseBlock)
        .input("CimbraBuenasCondiciones", sql.Int, CimbraBuenasCondiciones)
        .input("MadrinasPerimetro", sql.Int, MadrinasPerimetro)
        .input("ContraflechaLosa", sql.Int, ContraflechaLosa)
        .input("NivelacionCimbra", sql.Int, NivelacionCimbra)
        .input("TaponearEnrase", sql.Int, TaponearEnrase)
        .input("VerificarLosainclinada", sql.Int, VerificarLosainclinada)
        .input("UbicacionSalidas", sql.Int, UbicacionSalidas)
        .input("RevisionConexiones", sql.Int, RevisionConexiones)
        .input("DiametrosTuberia", sql.Int, DiametrosTuberia)
        .input("TipoTuberia", sql.Int, TipoTuberia)
        .input("Encamisado", sql.Int, Encamisado)
        .input("PruebaHidraulica", sql.Int, PruebaHidraulica)
        .input("ModulacionVigueta", sql.Int, ModulacionVigueta)
        .input("TipoMalla", sql.Int, TipoMalla)
        .input("TrabeLosa", sql.Int, TrabeLosa)
        .input("VarillasTrabes", sql.Int, VarillasTrabes)
        .input("EstribosTrabes", sql.Int, EstribosTrabes)
        .input("RefuerzoMalla", sql.Int, RefuerzoMalla)
        .input("RefuerzoEnCastillos", sql.Int, RefuerzoEnCastillos)
        .input("RefuerzoDeCastillos", sql.Int, RefuerzoDeCastillos)
        .input("Traslapes", sql.Int, Traslapes)
        .input("Dobleces", sql.Int, Dobleces)
        .input("Amarres", sql.Int, Amarres)
        .input("Anclajes", sql.Int, Anclajes)
        .input("Calzado", sql.Int, Calzado)
        .input("Bayoneteo", sql.Int, Bayoneteo)
        .input("UbicacionCastillosPretil", sql.Int, UbicacionCastillosPretil)
        .input("ContraventeoBAP", sql.Int, ContraventeoBAP)
        .input("Vibrado", sql.Int, Vibrado)
        .input("EspesorComprension", sql.Int, EspesorComprension)
        .input("AcabadoAvionLosaCompacta", sql.Int, AcabadoAvionLosaCompacta)
        .input("Curado", sql.Int, Curado)
        .input("Geolocalizacion", sql.Geography, Geolocalizacion)
      .input("Id", req.params.Id)
      .query(queries.updateENT);
    res.json({ IdFormato,IdContratista,IdSupervisor,IdResidente,RevisarIsometricoElec,RevisarDespieceElec,RevisarDiametroElec,UbicacionSalidasElec,CortesCajas,GuiadoPoliducto,RevisarIsometricoSani,RevisarDespieceSani,RevisarDiametroSani,UbicacionSalidasSani,PendienteMinTubo,PruebaFluidez,Gas,ConcretoBombeado,fcConcreto,Revenimiento,Cilindro7dias,Cilindro14dias,Cilindro28dias,CimbraBuenasCondiciones,MadrinasPerimetro,ContraflechaLosa,NivelacionCimbra,TaponearEnrase,UbicacionSalidas,RevisionConexiones,DiametrosTuberia,TipoTuberia,Encamisado,PruebaHidraulica,ModulacionVigueta,TipoMalla,TrabeLosa,VarillasTrabes,EstribosTrabes,RefuerzoMalla,RefuerzoEnCastillos,RefuerzoDeCastillos,Traslapes,Dobleces,Amarres,Anclajes,Calzado,Bayoneteo,UbicacionCastillosPretil,ContraventeoBAP,Vibrado,EspesorComprension,AcabadoAvionLosaCompacta,Curado,Geolocalizacion });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};