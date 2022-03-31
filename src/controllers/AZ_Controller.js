import { getConnection, sql, queries } from "../database";

export const getAZ = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .query(queries.getAllAZ);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const postAZ = async (req, res) => {
    let { IdFormato,IdContratista,IdSupervisor,IdResidente,RevisarIsometrico,RevisarDespiece,
      RevisarDiametroTuberia,UbicacionSalidasElec,CortesCajas,GuiadoPoliductoElec,ConcretoBombeado,fcConcreto,Revenimiento,Cilindro7dias,Cilindro14dias,Cilindro28dias,CimbraBuenasCondiciones,MadrinasPerimetro,ContraflechaLosa,NivelacionCimbra,TaponearEnraseBlock,UbicacionSalidasHidra,RevisionConexiones,DiametrosTuberia,TipoTuberia,ModulacionViguetaBovedilla,TipoMalla,TrabeLosa,VarillasTrabes,EstribosTrabes,RefuerzoMalla,RefuerzoEnCastillos,RefuerzoDeCastillos,Traslapes,Dobleces,Amarres,Anclajes,Calzado,Bayoneteo,UbicacionCastillosPretil,Vibrado,EspesorComprension,AcabadoAvionLosaCompacta,Curado,Geolocalizacion } = req.body;

    if(RevisarIsometrico == null) RevisarIsometrico = "";
    if(RevisarDespiece == null) RevisarDespiece = "";
    if(RevisarDiametroTuberia == null) RevisarDiametroTuberia = "";
    if(UbicacionSalidasElec == null) UbicacionSalidasElec = "";
    if(CortesCajas == null) CortesCajas = 0;
    if(GuiadoPoliductoElec == null) GuiadoPoliductoElec = "";
    if(ConcretoBombeado == null) ConcretoBombeado = "";
    if(fcConcreto == null) fcConcreto = "";
    if(Revenimiento == null) Revenimiento = "";
    if(Cilindro7dias == null) Cilindro7dias = "";
    if(Cilindro14dias == null) Cilindro14dias = "";
    if(Cilindro28dias == null) Cilindro28dias = "";
    if(CimbraBuenasCondiciones == null) CimbraBuenasCondiciones = "";
    if(MadrinasPerimetro == null) MadrinasPerimetro = "";
    if(ContraflechaLosa == null) ContraflechaLosa = "";
    if(NivelacionCimbra == null) NivelacionCimbra = "";
    if(TaponearEnraseBlock == null) TaponearEnraseBlock = "";
    if(UbicacionSalidasHidra == null) UbicacionSalidasHidra = "";
    if(RevisionConexiones == null) RevisionConexiones = "";
    if(DiametrosTuberia == null) DiametrosTuberia = "";
    if(TipoTuberia == null) TipoTuberia = "";
    if(ModulacionViguetaBovedilla == null) ModulacionViguetaBovedilla = "";
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
        .input("RevisarIsometrico", sql.Int, RevisarIsometrico)
        .input("RevisarDespiece", sql.Int, RevisarDespiece)
        .input("RevisarDiametroTuberia", sql.Int, RevisarDiametroTuberia)
        .input("UbicacionSalidasElec", sql.Int, UbicacionSalidasElec)
        .input("CortesCajas", sql.Int, CortesCajas)
        .input("GuiadoPoliductoElec", sql.Int, GuiadoPoliductoElec)
        .input("ConcretoBombeado", sql.Int, ConcretoBombeado)
        .input("fcConcreto", sql.Float, fcConcreto)
        .input("Revenimiento", sql.Float, Revenimiento)
        .input("Cilindro7dias", sql.Int, Cilindro7dias)
        .input("Cilindro14dias", sql.Int, Cilindro14dias)
        .input("Cilindro28dias", sql.Int, Cilindro28dias)
        .input("CimbraBuenasCondiciones", sql.Int, CimbraBuenasCondiciones)
        .input("MadrinasPerimetro", sql.Int, MadrinasPerimetro)
        .input("ContraflechaLosa", sql.Int, ContraflechaLosa)
        .input("NivelacionCimbra", sql.Int, NivelacionCimbra)
        .input("TaponearEnraseBlock", sql.Int, TaponearEnraseBlock)
        .input("UbicacionSalidasHidra", sql.Int, UbicacionSalidasHidra)
        .input("RevisionConexiones", sql.Int, RevisionConexiones)
        .input("DiametrosTuberia", sql.Int, DiametrosTuberia)
        .input("TipoTuberia", sql.Int, TipoTuberia)
        .input("ModulacionViguetaBovedilla", sql.Int, ModulacionViguetaBovedilla)
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
        .input("Vibrado", sql.Int, Vibrado)
        .input("EspesorComprension", sql.Int, EspesorComprension)
        .input("AcabadoAvionLosaCompacta", sql.Int, AcabadoAvionLosaCompacta)
        .input("Curado", sql.Int, Curado)
        .input("Geolocalizacion", sql.Geography, Geolocalizacion)
        .query(queries.postNewAZ) 
        res.json({IdFormato,IdContratista,IdSupervisor,IdResidente,RevisarIsometrico,RevisarDespiece,
          RevisarDiametroTuberia,UbicacionSalidasElec,CortesCajas,GuiadoPoliductoElec,ConcretoBombeado,fcConcreto,Revenimiento,Cilindro7dias,Cilindro14dias,Cilindro28dias,CimbraBuenasCondiciones,MadrinasPerimetro,ContraflechaLosa,NivelacionCimbra,TaponearEnraseBlock,UbicacionSalidasHidra,RevisionConexiones,DiametrosTuberia,TipoTuberia,ModulacionViguetaBovedilla,TipoMalla,TrabeLosa,VarillasTrabes,EstribosTrabes,RefuerzoMalla,RefuerzoEnCastillos,RefuerzoDeCastillos,Traslapes,Dobleces,Amarres,Anclajes,Calzado,Bayoneteo,UbicacionCastillosPretil,Vibrado,EspesorComprension,AcabadoAvionLosaCompacta,Curado,Geolocalizacion})
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const getAZById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.getAZById);
      return res.json(result.recordset[0]);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const deleteAZById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("Id", req.params.Id)
        .query(queries.deleteAZ);
  
      if (result.rowsAffected[0] === 0) return res.sendStatus(404);
  
      return res.sendStatus(204);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const updateProductById = async (req, res) => {
  const { IdFormato,IdContratista,IdSupervisor,IdResidente,RevisarIsometrico,RevisarDespiece,
    RevisarDiametroTuberia,UbicacionSalidasElec,CortesCajas,GuiadoPoliductoElec,ConcretoBombeado,fcConcreto,Revenimiento,Cilindro7dias,Cilindro14dias,Cilindro28dias,CimbraBuenasCondiciones,MadrinasPerimetro,ContraflechaLosa,NivelacionCimbra,TaponearEnraseBlock,UbicacionSalidasHidra,RevisionConexiones,DiametrosTuberia,TipoTuberia,ModulacionViguetaBovedilla,TipoMalla,TrabeLosa,VarillasTrabes,EstribosTrabes,RefuerzoMalla,RefuerzoEnCastillos,RefuerzoDeCastillos,Traslapes,Dobleces,Amarres,Anclajes,Calzado,Bayoneteo,UbicacionCastillosPretil,Vibrado,EspesorComprension,AcabadoAvionLosaCompacta,Curado,Geolocalizacion } = req.body;

  // validating
  if (RevisarIsometrico == null || RevisarDespiece == null || RevisarDiametroTuberia == null || UbicacionSalidasElec == null || CortesCajas == null || GuiadoPoliductoElec == null || ConcretoBombeado == null || fcConcreto == null || Cilindro7dias == null || Cilindro14dias == null || Cilindro28dias == null || CimbraBuenasCondiciones == null || MadrinasPerimetro == null || ContraflechaLosa == null || NivelacionCimbra == null || TaponearEnraseBlock == null || UbicacionSalidasHidra == null || RevisionConexiones == null || DiametrosTuberia == null || TipoTuberia == null || ModulacionViguetaBovedilla == null || TipoMalla == null || TrabeLosa  == null || VarillasTrabes  == null || EstribosTrabes  == null || RefuerzoMalla  == null || RefuerzoEnCastillos  == null || RefuerzoDeCastillos  == null || Traslapes  == null || Dobleces  == null || Amarres  == null || Anclajes  == null || Calzado  == null || Bayoneteo  == null || UbicacionCastillosPretil  == null || Vibrado  == null || EspesorComprension  == null || AcabadoAvionLosaCompacta  == null || Curado  == null || Geolocalizacion  == null) {
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
        .input("RevisarIsometrico", sql.Int, RevisarIsometrico)
        .input("RevisarDespiece", sql.Int, RevisarDespiece)
        .input("RevisarDiametroTuberia", sql.Int, RevisarDiametroTuberia)
        .input("UbicacionSalidasElec", sql.Int, UbicacionSalidasElec)
        .input("CortesCajas", sql.Int, CortesCajas)
        .input("GuiadoPoliductoElec", sql.Int, GuiadoPoliductoElec)
        .input("ConcretoBombeado", sql.Int, ConcretoBombeado)
        .input("fcConcreto", sql.Float, fcConcreto)
        .input("Revenimiento", sql.Float, Revenimiento)
        .input("Cilindro7dias", sql.Int, Cilindro7dias)
        .input("Cilindro14dias", sql.Int, Cilindro14dias)
        .input("Cilindro28dias", sql.Int, Cilindro28dias)
        .input("CimbraBuenasCondiciones", sql.Int, CimbraBuenasCondiciones)
        .input("MadrinasPerimetro", sql.Int, MadrinasPerimetro)
        .input("ContraflechaLosa", sql.Int, ContraflechaLosa)
        .input("NivelacionCimbra", sql.Int, NivelacionCimbra)
        .input("TaponearEnraseBlock", sql.Int, TaponearEnraseBlock)
        .input("UbicacionSalidasHidra", sql.Int, UbicacionSalidasHidra)
        .input("RevisionConexiones", sql.Int, RevisionConexiones)
        .input("DiametrosTuberia", sql.Int, DiametrosTuberia)
        .input("TipoTuberia", sql.Int, TipoTuberia)
        .input("ModulacionViguetaBovedilla", sql.Int, ModulacionViguetaBovedilla)
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
        .input("Vibrado", sql.Int, Vibrado)
        .input("EspesorComprension", sql.Int, EspesorComprension)
        .input("AcabadoAvionLosaCompacta", sql.Int, AcabadoAvionLosaCompacta)
        .input("Curado", sql.Int, Curado)
        .input("Geolocalizacion", sql.Geography, Geolocalizacion)
      .input("Id", req.params.Id)
      .query(queries.updateAZ);
    res.json({ IdFormato,IdContratista,IdSupervisor,IdResidente,RevisarIsometrico,RevisarDespiece,
      RevisarDiametroTuberia,UbicacionSalidasElec,CortesCajas,GuiadoPoliductoElec,ConcretoBombeado,fcConcreto,Revenimiento,Cilindro7dias,Cilindro14dias,Cilindro28dias,CimbraBuenasCondiciones,MadrinasPerimetro,ContraflechaLosa,NivelacionCimbra,TaponearEnraseBlock,UbicacionSalidasHidra,RevisionConexiones,DiametrosTuberia,TipoTuberia,ModulacionViguetaBovedilla,TipoMalla,TrabeLosa,VarillasTrabes,EstribosTrabes,RefuerzoMalla,RefuerzoEnCastillos,RefuerzoDeCastillos,Traslapes,Dobleces,Amarres,Anclajes,Calzado,Bayoneteo,UbicacionCastillosPretil,Vibrado,EspesorComprension,AcabadoAvionLosaCompacta,Curado,Geolocalizacion });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};