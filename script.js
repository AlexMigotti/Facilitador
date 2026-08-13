const links = {
    'fbb': 'https://fbb.org.br/editais-de-projetos/editais-publicos/',
    'bndes': 'https://www.bndes.gov.br/wps/portal/site/home/mercado-de-capitais/fundos-de-investimentos/chamadas-publicas-para-selecao-de-fundos/!ut/p/z1/fY7BbsIwDIbvfYpeeoycSazTjhw2pg2tEtqhzQWZxBuGJikkRTw-KRQmLlz82_792QaV5XmWQZ0kJWO4KiiHB_7DyN5hCzU0qlzOX7_ePiaVnM9eFhM5ff6u3n_k4qmqSvg8g__8sOExUY_EOH4TaHiz26kpKO1dpGOEeuUMhSW7EDn2-vxRIdfeUiEt7TUaLwwJjR1H5FDI394ZH4YeuwMlypKLPhl6jRYNBtH1q5b1kOAexWX-Zl_qO1Zob7uWjukQioC9Iei2qjkBjCDI-Q!!/',
    'prosas': 'https://prosas.com.br/editais',
    'captadores': 'https://captadores.org.br/noticias/#editais',
    'mrv': 'https://institutomrv.com.br/',
    'tjmg': 'https://www.tjmg.jus.br/portal-tjmg/processos/prestacao-pecuniaria/',
    'gife': 'https://gife.org.br/editais/',
    'observatorio': 'https://observatorio3setor.org.br/',
    'capta': 'https://capta.org.br/fontes-de-financiamento/oportunidades/',
    'Mapa': 'https://mapaosc.ipea.gov.br/',
    'planilha': 'https://hbaleia.sharepoint.com/:x:/s/MobilizaodeRecursos/IQBkTiOOzVnvTJKfV0YjfjF8AfLXD7qiIv7uiL34gvrSE6g?e=KzFolN',
    'portal': 'https://script.google.com/macros/s/AKfycbzH3h_bpZ5HEzD1ZBjzb285pddn3-r5TpE0kor7ZxQWaDRGR_VxeftH-_ANPOy241egCw/exec',
    'BI': 'https://app.powerbi.com/reportEmbed?reportId=ef543ef2-7ca8-45f2-b42c-60467e34f6df&autoAuth=true&ctid=36378e8b-dd3a-4df4-888a-558ad821187b'
};

function openLink(key) {
    const url = links[key];
    if (url) {
        window.open(url, '_blank');
    } else {
        console.error("Link não encontrado");
    }
}
