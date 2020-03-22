
from iconservice import *

TAG = 'votingSample'

class votingSample(IconScoreBase):
    _VOTE_YES="VOTE_YES"
    _VOTE_NO="VOTE_NO"
    _VOTE_TRACK = "VOTE_TRACK"

    def __init__(self, db: IconScoreDatabase):
        super().__init__(db)
        self._vote_yes=VarDB(self._VOTE_YES,db,int)
        self._vote_no=VarDB(self._VOTE_NO,db,int)
        self._voteChecking = DictDB(self._VOTE_TRACK, db, int)
  
    def on_install(self):
        super().on_install()


    def on_update(self):
        super().on_update()

    @external
    def vote(self, _vote:int):
        #_vote: 찬성 혹은 반대 ->파라미터로 받을 것
        #투표가 한번 이루어졌는지 확인
        if self._voteChecking[self.msg.sender]==0:
            self._voteChecking[self.msg.sender]=_vote
            if _vote==1:
                self._vote_yes.set(self._vote_yes.get() + 1)
            elif _vote==2:
                self._vote_no.set(self._vote_no.get() + 1)
            else:
                Logger.debug(f'vote sent {_vote} is not valid', TAG)
                self.revert('invalid vote!')
            #퍼센트를 구하기 위한 식
            agree=self._vote_yes.get()
            disagree=self._vote_no.get()
            agreePer=agree/(agree+disagree)*100
            disagreePer=disagree/(agree+disagree)*100
        else:
            #투표자가 이미 투표를 했을 경우
            Logger.debug(f'already voted',TAG)
            self.revert('invalid vote!')
    @eventlog
    def _vote_result_per(self, agreePer : int, disagreePer : int):
        pass
    @eventlog
    def _vote_result(self, agree : int, disagree : int):
        pass

    @external(readonly=True)
    def get_vote_info(self) -> dict:
        result = {"yes": self._vote_yes.get(), "no": self._vote_no.get()}
        return result