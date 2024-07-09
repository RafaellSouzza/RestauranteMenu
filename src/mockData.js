// src/mockData.js
export const categorias = [
  { id: 1, nome: 'Pratos de Entrada' },
  { id: 2, nome: 'Prato Principal' },
  { id: 3, nome: 'Sobremesas' },
  { id: 4, nome: 'Hambúrgueres' },
  { id: 5, nome: 'Petiscos' },
  { id: 6, nome: 'Chás' },
  { id: 7, nome: 'Sucos' },
  { id: 8, nome: 'Bebidas' },
];

export const pratos = [
  { 
    id: 1, 
    nome: 'Feijoada', 
    descricao: 'Tradicional feijoada brasileira servida com arroz, farofa, couve e laranja.', 
    preco: 95.00, 
    categoria: 'Prato Principal',
    imagem: 'https://img.saborosos.com.br/imagens/feijoada-1.jpg',
    opcoes: [
      { nome: 'Pão', imagem: 'https://conteudo.imguol.com.br/c/entretenimento/65/2020/10/19/pao-frances-1603114029092_v2_4x3.jpg' },
      { nome: 'Creme de Cebola', imagem: 'https://static.itdg.com.br/images/1200-630/3f637062e5bf7288c879d207055138ca/352520-original.jpg' },
      { nome: 'Extra Picante', imagem: 'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia10647/slide/tipos-de-pimenta-cursos-cpt.jpg' }
    ]
  },
  { 
    id: 2, 
    nome: 'Picanha', 
    descricao: 'Picanha grelhada com arroz, feijão tropeiro e batata frita.', 
    preco: 130.00, 
    categoria: 'Prato Principal',
    imagem: 'https://s2-g1.glbimg.com/E6dB-tL3PsvZxmHNIlmWnwesCVc=/0x0:1270x710/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/O/l/i5rCoAQLuKtSnpeOxp2w/picanha-3.jpg',
    opcoes: [
      { nome: 'Molho Chimichurri', imagem: 'https://assets.unileversolutions.com/recipes-v2/215312.jpg' },
      { nome: 'Batata Extra', imagem: 'https://www.confeiteiradesucesso.com/wp-content/uploads/2022/04/receitabatatarustica.jpg' },
      { nome: 'Salada', imagem: 'https://blog.biglar.com.br/wp-content/uploads/2023/11/salad-from-tomatoes-cucumber-red-onions-lettuce-leaves-healthy-summer-vitamin-menu-vegan-vegetable-food-vegetarian-dinner-table.jpeg' }
    ]
  },
  { 
    id: 3, 
    nome: 'Brigadeirão', 
    descricao: 'Delicioso brigadeiro de chocolate.', 
    preco: 5.00, 
    categoria: 'Sobremesas',
    imagem: 'https://recipesblob.oetker.com.br/assets/37664d13763d42d098989cf94aa30ad5/636x382/bolo-brigadeiro.jpg',
    opcoes: [
      { nome: 'Granulado', imagem: 'https://www.shutterstock.com/image-photo/typical-brazilian-sweet-brigadeiro-hands-600nw-2423600149.jpg' },
      { nome: 'Coco Ralado', imagem: 'https://emporioxingu.com/wp-content/webp-express/webp-images/uploads/2022/02/coco-ralado-medio-tiny.jpg.webp' },
      { nome: 'Cereja', imagem: 'https://conteudo.imguol.com.br/c/entretenimento/ad/2016/11/21/cereja-1479759964118_v2_1920x1859.jpg' }
    ]
  },
  { 
    id: 4, 
    nome: 'Caipirinha', 
    descricao: 'Caipirinha clássica com limão, cachaça, açúcar e gelo.', 
    preco: 10.00, 
    categoria: 'Bebidas',
    imagem: 'https://www.xreceitas.com.br/wp-content/uploads/2023/12/receita-de-caipirinha-de-limao.webp',
    opcoes: [
      { nome: 'Mais Limão', imagem: 'https://conteudo.imguol.com.br/c/entretenimento/9f/2020/04/03/limao-1585951383576_v2_4x3.jpg' },
      { nome: 'Menos Açúcar', imagem: 'https://i0.wp.com/nutrimental.com.br/wp-content/uploads/2019/07/a%C3%A7%C3%BAcar-dieta-sem-acucar.jpg?fit=800%2C595&ssl=1' },
      { nome: 'Mais Gelo', imagem: 'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2015/01/gelo-e1420309297956.jpg' }
    ]
  },
  {
    id: 5,
    nome: 'Casas Del Toqui Gran Reserva Sauvignon Blanc',
    descricao: 'Casas Del Toqui, Alto Cachapoal',
    preco: 120.00,
    categoria: 'Bebidas',
    imagem: 'https://res.cloudinary.com/amodeliveryimgs/image/upload/w_128,h_128,c_fill,b_white/fd6mmwjwch5dwvqhgnrs.jpg',
    opcoes: [
      { nome: '', imagem: '' },
      { nome: '', imagem: '' },
      { nome: '', imagem: '' }
    ]
  },
  {
    id: 6,
    nome: 'Casas Del Toqui Gran Reserva Syrah',
    descricao: 'Casas Del Toqui, Alto Cachapoal',
    preco: 145.00,
    categoria: 'Bebidas',
    imagem: 'https://res.cloudinary.com/amodeliveryimgs/image/upload/w_128,h_128,c_fill,b_white/ge21g32rpnsjdsvv6scm.jpg',
    opcoes: [
      { nome: '', imagem: '' },
      { nome: '', imagem: '' },
      { nome: '', imagem: '' }
    ]
  },
  {
    id: 7,
    nome: 'Dadinhos de Brownie e Doce de Leite',
    descricao: 'Mini cubos de brownie recheado de doce de leite. (9 unidades)',
    preco: 24.90,
    categoria: 'Sobremesas',
    imagem: 'https://res.cloudinary.com/amodeliveryimgs/image/upload/w_128,h_128,c_fill,b_white/fngbfq299nkimgb3q90c.jpg',
    opcoes: [
      { nome: '', imagem: '' },
      { nome: '', imagem: '' },
      { nome: '', imagem: '' }
    ]
  },
  {
    id: 8,
    nome: 'Dadinhos de Coco',
    descricao: 'Mini cubos de doce de coco. (9 unidades)',
    preco: 14.00,
    categoria: 'Sobremesas',
    imagem: 'https://res.cloudinary.com/amodeliveryimgs/image/upload/w_128,h_128,c_fill,b_white/pahteafyqcxl2k52c6au.jpg',
    opcoes: [
      { nome: '', imagem: '' },
      { nome: '', imagem: '' },
      { nome: '', imagem: '' }
    ]
  },
  {
    id: 9,
    nome: 'Ceviche de Camarão',
    descricao: 'Camarões marinados ao molho especial de ceviche',
    preco: 38.90,
    categoria: 'Entradas',
    imagem: 'https://res.cloudinary.com/amodeliveryimgs/image/upload/w_128,h_128,c_fill,b_white/tceq31w5bvcrvratfaei.jpg',
    opcoes: [
      { nome: '', imagem: '' },
      { nome: '', imagem: '' },
      { nome: '', imagem: '' }
    ]
  },
  {
    id: 10,
    nome: 'Harumaki Chocolate Branco',
    descricao: 'Rolinhos recheado de chocolate branco. (4 unidades)',
    preco: 22.90,
    categoria: 'Sobremesas',
    imagem: 'https://static.itdg.com.br/images/1200-630/812ffc726a9bfa7872ccd863330bec55/303167-original.jpg',
    opcoes: [
      { nome: '', imagem: '' },
      { nome: '', imagem: '' },
      { nome: '', imagem: '' }
    ]
  },
    { 
    id: 11, 
    nome: 'Cheeseburger Artesanal', 
    descricao: 'Hambúrguer de carne bovina com queijo cheddar, alface, tomate e molho especial.', 
    preco: 25.00, 
    categoria: 'Hambúrgueres',
    imagem: 'https://supermercadosrondon.com.br/guiadecarnes/images/postagens/quer_fazer_hamburger_artesanal_perfeito_2019-05-14.jpg',
    opcoes: [
      { nome: 'Molho Extra', imagem: 'https://cdn0.tudoreceitas.com/pt/posts/7/2/2/molho_tartaro_simples_1227_600.jpg' },
      { nome: 'Queijo Extra', imagem: 'https://images.tcdn.com.br/img/img_prod/1049139/queijo_prato_fatiado_150g_d_or_603_1_d9a6770e63d8bc4319f8a61771adfb1d.jpg' },
      { nome: 'Bacon', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgQ_ExahDGJqdMXUXeqZunuh21C7qZzYlgdg&s' }
    ]
  },
  { 
    id: 12, 
    nome: 'Bacon Burger Artesanal', 
    descricao: 'Hambúrguer de carne bovina com bacon crocante, queijo cheddar, alface, tomate e molho barbecue.', 
    preco: 28.00, 
    categoria: 'Hambúrgueres',
    imagem: 'https://s2-casavogue.glbimg.com/GRF9KCq-1hiz5uSs-xX9Go_KqIc=/0x0:2048x1365/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2022/p/X/eb4KQdToys327cGqnRGg/receita-ceboloni-bacon.jpg',
    opcoes: [
      { nome: 'Molho Extra', imagem: 'https://cdn0.tudoreceitas.com/pt/posts/7/2/2/molho_tartaro_simples_1227_600.jpg' },
      { nome: 'Queijo Extra', imagem: 'https://images.tcdn.com.br/img/img_prod/1049139/queijo_prato_fatiado_150g_d_or_603_1_d9a6770e63d8bc4319f8a61771adfb1d.jpg' },
      { nome: 'Bacon', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgQ_ExahDGJqdMXUXeqZunuh21C7qZzYlgdg&s' }
    ]
  },
  { 
    id: 13, 
    nome: 'Veggie Burger Artesanal', 
    descricao: 'Hambúrguer de grão-de-bico com alface, tomate, cebola roxa e molho especial vegano.', 
    preco: 22.00, 
    categoria: 'Hambúrgueres',
    imagem: 'https://www.evino.com.br/blog/wp-content/uploads/2022/08/hamburguer-artesanal-scaled.jpg',
    opcoes: [
      { nome: 'Molho Extra', imagem: 'https://cdn0.tudoreceitas.com/pt/posts/7/2/2/molho_tartaro_simples_1227_600.jpg' },
      { nome: 'Queijo Extra', imagem: 'https://images.tcdn.com.br/img/img_prod/1049139/queijo_prato_fatiado_150g_d_or_603_1_d9a6770e63d8bc4319f8a61771adfb1d.jpg' },
      { nome: 'Bacon', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgQ_ExahDGJqdMXUXeqZunuh21C7qZzYlgdg&s' }
    ]
  },
  { 
    id: 14, 
    nome: 'Double Burger Artesanal', 
    descricao: 'Dois hambúrgueres de carne bovina com queijo cheddar, alface, tomate e molho especial.', 
    preco: 35.00, 
    categoria: 'Hambúrgueres',
    imagem: 'https://razeburger.com.br/wp-content/uploads/2020/08/raze-duplo.jpg',
    opcoes: [
      { nome: 'Molho Extra', imagem: 'https://cdn0.tudoreceitas.com/pt/posts/7/2/2/molho_tartaro_simples_1227_600.jpg' },
      { nome: 'Queijo Extra', imagem: 'https://images.tcdn.com.br/img/img_prod/1049139/queijo_prato_fatiado_150g_d_or_603_1_d9a6770e63d8bc4319f8a61771adfb1d.jpg' },
      { nome: 'Bacon', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgQ_ExahDGJqdMXUXeqZunuh21C7qZzYlgdg&s' }
    ]
  },
  { 
    id: 15, 
    nome: 'Chicken Burger Artesanal', 
    descricao: 'Hambúrguer de frango grelhado com queijo, alface, tomate e molho especial.', 
    preco: 26.00, 
    categoria: 'Hambúrgueres',
    imagem: 'https://scontent-gig4-1.xx.fbcdn.net/v/t39.30808-6/278146708_353857760094489_5573153944337718255_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFjaBnZBnJTt405w-IgG5KQ2XiQIT6iTczZeJAhPqJNzIXPwtO353KzdwjNIXxnqq6dLDXk1necXfG7T0wddmVn&_nc_ohc=CznNP0RNI_sQ7kNvgEXEYa-&_nc_ht=scontent-gig4-1.xx&oh=00_AYDWbOU6IJ7Qzc3gINgPF_01Dk6OVHVXpjnzQPlx3KaQ1w&oe=6692494C',
    opcoes: [
      { nome: 'Molho Extra', imagem: 'https://cdn0.tudoreceitas.com/pt/posts/7/2/2/molho_tartaro_simples_1227_600.jpg' },
      { nome: 'Queijo Extra', imagem: 'https://images.tcdn.com.br/img/img_prod/1049139/queijo_prato_fatiado_150g_d_or_603_1_d9a6770e63d8bc4319f8a61771adfb1d.jpg' },
      { nome: 'Bacon', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgQ_ExahDGJqdMXUXeqZunuh21C7qZzYlgdg&s' }
    ]
  },
  { 
    id: 16, 
    nome: 'Chá Verde', 
    descricao: 'Chá verde tradicional, rico em antioxidantes.', 
    preco: 10.00, 
    categoria: 'Chás',
    imagem: 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTMDEr5rldvWaJICSs3GVqYmdDJjD1x-qQgjiImUXo56bqXaBR_jT0ghmaVeqdANU4S',
    opcoes: [
      { nome: 'Gelo', imagem: 'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2015/01/gelo-e1420309297956.jpg' },
      { nome: 'Açúcar', imagem: 'https://guiadacozinha.com.br/wp-content/uploads/2020/01/Conhe%C3%A7a-7-tipos-de-a%C3%A7%C3%BAcar-e-aprenda-como-us%C3%A1-los-nas-suas-receitas.jpg' },
      { nome: 'Limão', imagem: 'https://conteudo.imguol.com.br/c/entretenimento/9f/2020/04/03/limao-1585951383576_v2_450x337.jpg' }
    ]
  },
  { 
    id: 17, 
    nome: 'Chá de Camomila', 
    descricao: 'Chá de camomila calmante, perfeito para relaxar.', 
    preco: 18.00, 
    categoria: 'Chás',
    imagem: 'https://www.infoescola.com/wp-content/uploads/2008/06/ch%C3%A1-de-camomila_276983156.jpg',
    opcoes: [
      { nome: 'Gelo', imagem: 'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2015/01/gelo-e1420309297956.jpg' },
      { nome: 'Açúcar', imagem: 'https://guiadacozinha.com.br/wp-content/uploads/2020/01/Conhe%C3%A7a-7-tipos-de-a%C3%A7%C3%BAcar-e-aprenda-como-us%C3%A1-los-nas-suas-receitas.jpg' },
      { nome: 'Limão', imagem: 'https://conteudo.imguol.com.br/c/entretenimento/9f/2020/04/03/limao-1585951383576_v2_450x337.jpg' }
    ]
  },
  { 
    id: 18, 
    nome: 'Chá de Hortelã', 
    descricao: 'Chá de hortelã refrescante, ideal para digestão.', 
    preco: 19.00, 
    categoria: 'Chás',
    imagem: 'https://static.tuasaude.com/media/article/jf/xr/beneficios-do-cha-de-hortela_57292_l.jpg',
    opcoes: [
      { nome: 'Gelo', imagem: 'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2015/01/gelo-e1420309297956.jpg' },
      { nome: 'Açúcar', imagem: 'https://guiadacozinha.com.br/wp-content/uploads/2020/01/Conhe%C3%A7a-7-tipos-de-a%C3%A7%C3%BAcar-e-aprenda-como-us%C3%A1-los-nas-suas-receitas.jpg' },
      { nome: 'Limão', imagem: 'https://conteudo.imguol.com.br/c/entretenimento/9f/2020/04/03/limao-1585951383576_v2_450x337.jpg' }
    ]
  },
  { 
    id: 19, 
    nome: 'Chá de Erva-doce', 
    descricao: 'Chá de erva-doce suave e aromático.', 
    preco: 17.00, 
    categoria: 'Chás',
    imagem: 'https://s2-ge.glbimg.com/G6NyzyOE7DhnKJgF7xZM23e9uN0=/1200x/smart/filters:cover():strip_icc()/s04.video.glbimg.com/x720/11866563.jpg',
   opcoes: [
      { nome: 'Gelo', imagem: 'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2015/01/gelo-e1420309297956.jpg' },
      { nome: 'Açúcar', imagem: 'https://guiadacozinha.com.br/wp-content/uploads/2020/01/Conhe%C3%A7a-7-tipos-de-a%C3%A7%C3%BAcar-e-aprenda-como-us%C3%A1-los-nas-suas-receitas.jpg' },
      { nome: 'Limão', imagem: 'https://conteudo.imguol.com.br/c/entretenimento/9f/2020/04/03/limao-1585951383576_v2_450x337.jpg' }
    ]
  },
  { 
    id: 20, 
    nome: 'Chá Preto', 
    descricao: 'Chá preto robusto, ideal para começar o dia.', 
    preco: 10.00, 
    categoria: 'Chás',
    imagem: 'https://s2-ge.glbimg.com/1VBIcgH2TZcAELKaahBaw4VbY6g=/0x0:612x408/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/0/o/txIJa4ROaxlnT9AXbVpg/cha-preto.jpeg',
    opcoes: [
      { nome: 'Gelo', imagem: 'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2015/01/gelo-e1420309297956.jpg' },
      { nome: 'Açúcar', imagem: 'https://guiadacozinha.com.br/wp-content/uploads/2020/01/Conhe%C3%A7a-7-tipos-de-a%C3%A7%C3%BAcar-e-aprenda-como-us%C3%A1-los-nas-suas-receitas.jpg' },
      { nome: 'Limão', imagem: 'https://conteudo.imguol.com.br/c/entretenimento/9f/2020/04/03/limao-1585951383576_v2_450x337.jpg' }
    ]
  },
  { 
    id: 21, 
    nome: 'Suco de Laranja', 
    descricao: 'Suco natural de laranja, rico em vitamina C.', 
    preco: 17.00, 
    categoria: 'Sucos',
    imagem: 'https://www.citrosuco.com.br/wp-content/uploads/2022/02/THUMB-05.png',
    opcoes: [
      { nome: 'Gelo', imagem: 'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2015/01/gelo-e1420309297956.jpg' },
      { nome: 'Açúcar', imagem: 'https://guiadacozinha.com.br/wp-content/uploads/2020/01/Conhe%C3%A7a-7-tipos-de-a%C3%A7%C3%BAcar-e-aprenda-como-us%C3%A1-los-nas-suas-receitas.jpg' },
      { nome: 'Limão', imagem: 'https://conteudo.imguol.com.br/c/entretenimento/9f/2020/04/03/limao-1585951383576_v2_450x337.jpg' }
    ]
  },
  { 
    id: 22, 
    nome: 'Suco de Morango', 
    descricao: 'Suco natural de morango, fresco e saboroso.', 
    preco: 18.00, 
    categoria: 'Sucos',
    imagem: 'https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-suco-abacaxi-morango.jpg',
    opcoes: [
      { nome: 'Gelo', imagem: 'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2015/01/gelo-e1420309297956.jpg' },
      { nome: 'Açúcar', imagem: 'https://guiadacozinha.com.br/wp-content/uploads/2020/01/Conhe%C3%A7a-7-tipos-de-a%C3%A7%C3%BAcar-e-aprenda-como-us%C3%A1-los-nas-suas-receitas.jpg' },
      { nome: 'Limão', imagem: 'https://conteudo.imguol.com.br/c/entretenimento/9f/2020/04/03/limao-1585951383576_v2_450x337.jpg' }
    ]
  },
  { 
    id: 23, 
    nome: 'Suco de Abacaxi', 
    descricao: 'Suco natural de abacaxi, refrescante e tropical.', 
    preco: 18.00, 
    categoria: 'Sucos',
    imagem: 'https://www.sabornamesa.com.br/images/receitas/pins_image/r2399-suco-de-abacaxi-com-hortela-pin.jpg',
    opcoes: [
      { nome: 'Gelo', imagem: 'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2015/01/gelo-e1420309297956.jpg' },
      { nome: 'Açúcar', imagem: 'https://guiadacozinha.com.br/wp-content/uploads/2020/01/Conhe%C3%A7a-7-tipos-de-a%C3%A7%C3%BAcar-e-aprenda-como-us%C3%A1-los-nas-suas-receitas.jpg' },
      { nome: 'Limão', imagem: 'https://conteudo.imguol.com.br/c/entretenimento/9f/2020/04/03/limao-1585951383576_v2_450x337.jpg' }
    ]
  },
  { 
    id: 24, 
    nome: 'Suco de Limão', 
    descricao: 'Suco natural de limão, perfeito para os dias quentes.', 
    preco: 16.00, 
    categoria: 'Sucos',
    imagem: 'https://static.itdg.com.br/images/1200-675/7a00b46f2e78b220deb7c80ac5f8cb16/352517-original.jpg',
    opcoes: [
      { nome: 'Gelo', imagem: 'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2015/01/gelo-e1420309297956.jpg' },
      { nome: 'Açúcar', imagem: 'https://guiadacozinha.com.br/wp-content/uploads/2020/01/Conhe%C3%A7a-7-tipos-de-a%C3%A7%C3%BAcar-e-aprenda-como-us%C3%A1-los-nas-suas-receitas.jpg' },
      { nome: 'Limão', imagem: 'https://conteudo.imguol.com.br/c/entretenimento/9f/2020/04/03/limao-1585951383576_v2_450x337.jpg' }
    ]
  },
  { 
    id: 25, 
    nome: 'Suco de Uva', 
    descricao: 'Suco natural de uva, doce e nutritivo.', 
    preco: 19.00, 
    categoria: 'Sucos',
    imagem: 'https://img.cybercook.com.br/receitas/612/suco-de-uva-natural.jpeg',
    opcoes: [
      { nome: 'Gelo', imagem: 'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2015/01/gelo-e1420309297956.jpg' },
      { nome: 'Açúcar', imagem: 'https://guiadacozinha.com.br/wp-content/uploads/2020/01/Conhe%C3%A7a-7-tipos-de-a%C3%A7%C3%BAcar-e-aprenda-como-us%C3%A1-los-nas-suas-receitas.jpg' },
      { nome: 'Limão', imagem: 'https://conteudo.imguol.com.br/c/entretenimento/9f/2020/04/03/limao-1585951383576_v2_450x337.jpg' }
    ]
  },
    { 
    id: 1, 
    nome: 'Salada Caprese', 
    descricao: 'Salada fresca de tomate, mussarela de búfala e manjericão.', 
    preco: 125.00, 
    categoria: 'Pratos de Entrada',
    imagem: 'https://assets.delirec.com/images%2FuDF51suDddbVuXMBNJMz5uzK4Le2%2Frecipe%2F54db71c0-6945-474d-b682-f816baf46768-Salada-Caprese-gallery-0',
    opcoes: [
      { nome: 'Azeite Extra Virgem', imagem: 'https://static.wixstatic.com/media/46fa11_1c3e217505d34400a0f0b580f927148c~mv2.jpeg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/46fa11_1c3e217505d34400a0f0b580f927148c~mv2.jpeg' },
      { nome: 'Vinagre Balsâmico', imagem: 'https://static.itdg.com.br/images/auto-auto/109ec929bdfc2a47eaad70e1f0dd3e7c/aceto-balsamico.jpg' },
      { nome: 'Pimenta do Reino', imagem: 'https://cdn.awsli.com.br/600x450/4/4552/produto/33268851/25db401674.jpg' }
    ]
  },
  { 
    id: 2, 
    nome: 'Bruschetta', 
    descricao: 'Torradas italianas com tomate, manjericão e azeite.', 
    preco: 120.00, 
    categoria: 'Pratos de Entrada',
    imagem: 'https://static.itdg.com.br/images/1200-630/dadafb5a13a8fc316bded0ea8feb2a37/326223-original.jpg',
    opcoes: [
      { nome: 'Queijo Parmesão', imagem: 'https://cozinharcomerebeber.com.br/wp-content/uploads/2017/11/queijo-parmeso.jpg' },
      { nome: 'Azeitona', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpLoZF7M-nBBjOdomlQd_IQMoEa--IsxMRRQ&s' },
      { nome: 'Alho', imagem: '' }
    ]
  },
  { 
    id: 3, 
    nome: 'Carpaccio', 
    descricao: 'Fatias finas de carne bovina crua temperada com molho de mostarda e alcaparras.', 
    preco: 130.00, 
    categoria: 'Pratos de Entrada',
    imagem: 'https://wessel.com.br/cdn/shop/products/Carpaccio-fundomarmore.jpg?v=1678372664',
    opcoes: [
      { nome: 'Queijo Parmesão', imagem: 'https://cozinharcomerebeber.com.br/wp-content/uploads/2017/11/queijo-parmeso.jpg' },
      { nome: 'Azeitona', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpLoZF7M-nBBjOdomlQd_IQMoEa--IsxMRRQ&s' },
      { nome: 'Azeite Extra Virgem', imagem: 'https://static.wixstatic.com/media/46fa11_1c3e217505d34400a0f0b580f927148c~mv2.jpeg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/46fa11_1c3e217505d34400a0f0b580f927148c~mv2.jpeg' },
    ]
  },
  { 
    id: 4, 
    nome: 'Camarão Empanado', 
    descricao: 'Camarões empanados crocantes servidos com molho tártaro.', 
    preco: 135.00, 
    categoria: 'Pratos de Entrada',
    imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/15267278960d6e9dc9bfcf4ab3f6ca09_XL.jpg',
    opcoes: [
      { nome: 'Limão', imagem: 'https://conteudo.imguol.com.br/c/entretenimento/9f/2020/04/03/limao-1585951383576_v2_450x337.jpg' },
      { nome: 'Molho Picante', imagem: 'https://i.panelinha.com.br/i1/228-bk-6433-molho-de-pimenta.webp' },
      { nome: 'Azeite Extra Virgem', imagem: 'https://static.wixstatic.com/media/46fa11_1c3e217505d34400a0f0b580f927148c~mv2.jpeg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/46fa11_1c3e217505d34400a0f0b580f927148c~mv2.jpeg' },
    ]
  },
  { 
    id: 5, 
    nome: 'Anéis de Lula', 
    descricao: 'Lulas empanadas e fritas, acompanhadas de molho de limão.', 
    preco: 128.00, 
    categoria: 'Pratos de Entrada',
    imagem: 'https://vonaoca.com.br/wp-content/uploads/2022/06/1-16.jpg',
    opcoes: [
      { nome: 'Molho de Alho', imagem: 'https://static.itdg.com.br/images/1200-675/6b8a52d3bbaf887ddff7def47994a726/shutterstock-256521679.jpg' },
      { nome: 'Molho Tártaro', imagem: 'https://cdn0.tudoreceitas.com/pt/posts/8/2/4/molho_tartaro_com_cenoura_3428_orig.jpg' },
      { nome: 'Azeite Extra Virgem', imagem: 'https://static.wixstatic.com/media/46fa11_1c3e217505d34400a0f0b580f927148c~mv2.jpeg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/46fa11_1c3e217505d34400a0f0b580f927148c~mv2.jpeg' },
    ]
  }
];
