import { v4 as uuidv4 } from 'uuid';

let empresas = [];

export const getEmpresas = (req, res) => {
    res.send(empresas);
}

export const createEmpresa = (req, res) => {
    const empresa = req.body;

    empresas.push({ ...empresa, id: uuidv4() });

    res.send(`Users with the name ${empresa.razaoSocial} added in Database!`);
}

export const getEmpresa = (req, res) => {
    const { id } = req.params;

    const foundEmpresa = empresas.find((empresa) => empresa.id === id);

    res.send(foundEmpresa);
}

export const deleteEmpresa = (req, res) => {
    const { id } = req.params;

    empresas = empresas.filter((empresa) => empresa.id !== id);

    res.send(`User with the id ${id} deleted from database.`);
}

export const updateEmpresa = (req, res) => {
    const { id } = req.params;
    const { razaoSocial, cnpj, cep, cidade, estado, bairro, complemento  } = req.body;

    const empresa = empresas.find((empresa) => empresa.id === id);

    if (razaoSocial) empresa.razaoSocial = razaoSocial;
    if (cnpj) empresa.cnpj = cnpj;
    if (cep) empresa.cep = cep;
    if (estado) empresa.estado = estado;
    if (cidade) empresa.cidade = cidade;
    if (bairro) empresa.bairro = bairro;
    if (complemento) empresa.complemento = complemento;
    
    res.send(`User with the ${id} has been updated`);

}
