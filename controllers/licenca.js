import { v4 as uuidv4 } from 'uuid';

let licencas = [];

export const getLicencas = (req, res) => {
    res.send(licencas);
}

export const createLicenca = (req, res) => {
    const licenca = req.body;

    licencas.push({ ...licenca, id: uuidv4() });

    res.send(`Licenca with the id ${licenca.idEmpresa} added in Database!`);
}

export const getLicenca = (req, res) => {
    const { id } = req.params;

    const foundLicenca = licencas.find((licenca) => licenca.id === id);

    res.send(foundLicenca);
}

export const deleteLicenca = (req, res) => {
    const { id } = req.params;

    licencas = licencas.filter((licenca) => licenca.id !== id);

    res.send(`Licenca with the id ${id} deleted from database.`);
}

export const updateLicenca = (req, res) => {
    const { id } = req.params;
    const { idEmpresa, numero, orgaoAmbiental, emissao, validade } = req.body;

    const licenca = licencas.find((licenca) => licenca.id === id);

    if (idEmpresa) licenca.idEmpresa = idEmpresa;
    if (numero) licenca.numero = numero;
    if (orgaoAmbiental) licenca.orgaoAmbiental = orgaoAmbiental;
    if (emissao) licenca.emissao = emissao;
    if (validade) licenca.validade = validade;

    
    res.send(`Licenca with the ${id} has been updated`);

}
