import { Router } from "express";
import * as GraficaCtrl from '../controllers/grafica.controller'

const router = Router();

router.get('/incidentes', GraficaCtrl.getCountTipoInciendente);
router.get('/incidentesPorSector', GraficaCtrl.getCountTipoInciendenteBySector); // Nueva ruta para filtrar por sector
router.get('/incidentesPorSectorYAnio', GraficaCtrl.getCountTipoInciendenteByYearAndSector); // Nueva ruta para filtrar por sector y año
router.get('/incidentesPorSectorYAnioYMes', GraficaCtrl.getCountTipoInciendenteByYearAndMonthAndSector); // Nueva ruta para filtrar por sector, año y mes
router.get('/incidentesPorSectorYAnioYMesYDia', GraficaCtrl.getCountTipoInciendenteByYearAndMonthAndDayAndSector); // Nueva ruta para filtrar por sector, año, mes y dia
router.get('/incidentesPorAnio', GraficaCtrl.getCountTipoInciendenteByYear); // Nueva ruta para filtrar por año
router.get('/incidentesPorAnioYMes', GraficaCtrl.getCountTipoInciendenteByYearAndMonth); // Nueva ruta para filtrar por año y mes
router.get('/incidentesPorAnioYMesYDia', GraficaCtrl.getCountTipoInciendenteByYearAndMonthAndDay); // Nueva ruta para filtrar por año, mes y día
router.get('/anios', GraficaCtrl.getAnios); // Obtener años existentes
router.get('/sectores', GraficaCtrl.getSector); // Obtener sectores existentes

export default router;