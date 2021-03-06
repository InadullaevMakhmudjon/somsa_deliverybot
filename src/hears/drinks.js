import Markup from 'telegraf/markup';
import drinks from '../data/drinks.json';
import locale from '../locale/index.json';
import generator from '../keyboards/generator';
import keyboards from '../keyboards';

function getData() {
  const data = drinks.map(({ group }) => group);
  return [...new Set(data)];
}

export default (ctx) => {
  const buttons = generator(getData());
  buttons.push(keyboards.back(ctx));
  ctx.reply(locale.SelectProduct[ctx.session.language], Markup.keyboard(buttons).resize().extra());
};
