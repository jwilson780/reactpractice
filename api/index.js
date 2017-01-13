import express from 'express';
import data from '../src/testData.json';

const router = express.Router();
const contests = data.contests.reduce((obj, contest) =>{
  obj[contest.id] = contest;
  return obj;
},{});

router.get('/contests', (req, res) =>{
  res.send({
    contests: contests
  });

});

router.get('/contests/:contestId', (req, res) => {
  let contest = contests[req.params.contestId];
  contest.decscription = 'In a nation that was proud of hard work, strong families, close-knit communities, and our faith in God, too many of us now tend to worship self-indulgence and consumption. Human identity is no longer defined by what one does, but by what one owns. But we\'ve discovered that owning things and consuming things does not satisfy our longing for meaning. We\'ve learned that piling up material goods cannot fill the emptiness of lives which have no confidence or purpose. The symptoms of this crisis of the American spirit are all around us. For the first time in the history of our country a majority of our people believe that the next five years will be worse than the past five years. Two-thirds of our people do not even vote. The productivity of American workers is actually dropping, and the willingness of Americans to save for the future has fallen below that of all other people in the Western world. As you know, there is a growing disrespect for government and for churches and for schools, the news media, and other institutions. This is not a message of happiness or reassurance, but it is the truth and it is a warning.';
  res.send(contest);
});

export default router;
