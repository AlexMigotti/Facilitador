const links = {
    'fbb': 'https://fbb.org.br/editais-de-projetos/editais-publicos/',
    'bndes': 'https://www.bndes.gov.br/wps/portal/site/home/mercado-de-capitais/fundos-de-investimentos/chamadas-publicas-para-selecao-de-fundos/!ut/p/z1/fY7BbsIwDIbvfYpeeoycSazTjhw2pg2tEtqhzQWZxBuGJikkRTw-KRQmLlz82_792QaV5XmWQZ0kJWO4KiiHB_7DyN5hCzU0qlzOX7_ePiaVnM9eFhM5ff6u3n_k4qmqSvg8g__8sOExUY_EOH4TaHiz26kpKO1dpGOEeuUMhSW7EDn2-vxRIdfeUiEt7TUaLwwJjR1H5FDI394ZH4YeuwMlypKLPhl6jRYNBtH1q5b1kOAexWX-Zl_qO1Zob7uWjukQioC9Iei2qjkBjCDI-Q!!/',
    'prosas': 'https://prosas.com.br/editais',
    'captadores': 'https://captadores.org.br/noticias/#editais',
    'mrv': 'https://institutomrv.com.br/',
    'tjmg': 'https://www.tjmg.jus.br/portal-tjmg/processos/prestacao-pecuniaria/'
};

function openLink(key) {
    const url = links[key];
    if (url) {
        window.open(url, '_blank');
    } else {
        console.error("Link não encontrado");
    }
}