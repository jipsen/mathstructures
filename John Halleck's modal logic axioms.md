<h1>Logic Systems Axiom List</h1>

There are a limited number of axioms used to build various modal and non-standard logic systems.

<h1>Notes</h1>

There are any number of numbering schemes for the many of the axioms below.  In fact, a different scheme in just about every book on the topic. There is no way to combine them and resolve the conflicts without having to rename some.

I've tried to have a consistent naming (numbering) scheme...

There were also a number of axioms I kept having to refer to that don't even have a name.  I've given them at least something one can refer to.

<h2>Further reading</h2>

<a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/bibliography.html#Hackstaff1966">[Hackstaff, 1966]</a>

<a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/bibliography.html#HandC1996">[Hughes and Cresswell, 1996]</a>

<a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/index.html">Logic Structures Pages</a>

<a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/systems/index.html">Logic Systems Pages</a>

<h2>Operators</h2>

* $\to$ : Material implication
* $\Rightarrow$ : Strict implication
* $\equiv$ : Equivalence
* $\leftrightarrow$ : Strict equivalence
* $\land$ : and
* $\lor$ : or
* $\neg$ : not
* $\Diamond$ : Possibility
* $\Box$ : Necessity

<hr title="Non-modal axioms"/><h1>Non-modal axioms</h1>

<a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/systems/ppl.html">Positive Propositional Logic</a>

* Implication
    * <a href="CpCqp.html">PL1</a>: $p \to (q\to p)$
    * <a href="CCpCqrCCpqCpr.html">PL2</a>: $(p\to (q\to r)) \to  ((p\to q)\to (p\to r))$
* And
    * <a name="PL3" id="PL3">PL3</a>: $(p\land q) \to p$<!-- CCpqp -->
    * <a name="PL4" id="PL4">PL4</a>: $(p\land q) \to  q$<!-- CCpqq -->
    * <a name="PL5" id="PL5">PL5</a>: $p \to  (q \to  (p\land q))$<!-- CpCqCpq -->    
* Or
    * <a name="PL6" id="PL6">PL6</a>:<!-- CpApq --> $p \to  (p\lor q)$
    * <a name="PL7" id="PL7">PL7</a>:<!-- CqApq --> $q \to  (p\lor q)$
    * <a name="PL8" id="PL8">PL8</a>:<!-- CCprCCqrCApqr --> $(p\to r) \to  ((q\to r)\to ((p\lor q)\to r))$
* Equivalence
    * <a name="PL9" id="PL9">PL9</a>:<!-- CEpqCpq --> $(p\equiv q) \to  (p\to q)$
    * <a name="PL10" id="PL10">PL10</a>:<!-- CEpqCqp --> $(p\equiv q) \to  (q\to p)$
    * <a name="PL11" id="PL11">PL11</a>:<!-- CCpqCCqpEpq --> $(p\to q) \to  ((q\to p)\to (p\equiv q))$
    
Russell and Whitehead basis for PC

* $(p \lor  p) \to  p$
* <a name="R2" id="R2">R2</a>: $q \to  (p\lor q)$
* <a name="R3" id="R3">R3</a>: $(p\lor q) \to  (q\lor p)$
* <a name="R4" id="R4">R4</a>: $(q\to r) \to  ((p\lor q)\to (p\lor r))$

<a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/systems/pc.html">Standard PC</a>

* <a name="PC1" id="PC1">PC1</a>: $(\neg p\to \neg q) \to  (q\to p)$

<a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/systems/ipc.html">Intuitionist PC</a>
   (Scholz and Schr&ouml;ter)

* <a name="IP1" id="IP1">IP1</a>: $(p\to \neg p) \to  \neg p$<!-- CCpNpNp -->
* <a name="IP2" id="IP2">IP2</a>: $\neg p \to  (p\to q)$ <!-- CNpCpq-->

Heyting's actual <a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/systems/ipc.html">Intuitionist PC</a>
  (Heyting)

* <a name="HA1" id="HA1">HA1</a>: $p \Rightarrow   (p\land p)$
* <a name="HA2" id="HA2">HA2</a>: $(p\land q) \Rightarrow   (q\land p)$
* <a name="HA3" id="HA3">HA3</a>: $(p\Rightarrow  q) \Rightarrow   ((p\land r)\Rightarrow  (q\land r))$
* <a name="HA4" id="HA4">HA4</a>: $((p\Rightarrow  q) \land  (q\Rightarrow  r))\Rightarrow  (p\Rightarrow  r)$
* <a name="HA5" id="HA5">HA5</a>: $q \Rightarrow   (p\Rightarrow  q)$  [This is clearly <a href="CpCqp.html">axiom PL1</a> in disguise]
* <a name="HA6" id="HA6">HA6</a>: $(p \land  (p\Rightarrow  q))\Rightarrow  q$
* <a name="HA7" id="HA7">HA7</a>: $p \Rightarrow   (p\lor q)$
* <a name="HA8" id="HA8">HA8</a>: $(p\lor q) \Rightarrow   (q\lor p)$
* <a name="HA9" id="HA9">HA9</a>: $((p\Rightarrow  r)\land (q\Rightarrow  r)) \Rightarrow   ((p\lor q)\Rightarrow  r)$
* <a name="HA10" id="HA10">HA10</a>: $\neg p \Rightarrow   (p\Rightarrow  q)$
* <a name="HA11" id="HA11">HA11</a>: $((p\Rightarrow  q)\land (p\Rightarrow  \neg q)) \Rightarrow   \neg p$

[<a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/bibliography.html#Hackstaff1966">Hackstaff</a>,
 <a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/bibliography.html#Hackstaff1966">1966</a>, p223]
 

<a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/systems/fitch.html">Fitch Calculus</a>

* <a name="F1" id="F1">F1</a>: $\neg p \to  (p\to q)$ [Same as <a href="#IP2">IP2</a>]
* <a name="F2" id="F2">F2</a>: $p \equiv  \neg \neg p$ (Often called Double Negation)
* <a name="F3" id="F3">F3</a>: $\neg (p\lor q) \equiv  \neg p\land \neg q$   [DeMorgan]
* <a name="F4" id="F4">F4</a>: $\neg (p\land q) \equiv  \neg p\lor \neg q$   [DeMorgan]

<a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/systems/johansson.html">Johansson Minimal Calculus</a>

* <a name="J1" id="J1">J1</a>: $(p\Rightarrow  q) \Rightarrow   (\neg q\Rightarrow  \neg p)$
* <a name="J2" id="J2">J2</a>: $\neg (p\land \neg p)$

Misc. axioms.

* Axioms of quantification.    
    * <a name="QD" id="QD">QD</a>: $\forall(x, p\to \varphi(x)) \to  (p\to \forall(x, \varphi(x))$
    * <a name="SPEC" id="SPEC">Spec</a>: $\forall(x, \varphi(x)) \to \varphi(y)$
* Axioms of equality
    * [... under construction ...]
* Other
    * <a href="CCCpqpp.html">Peirce</a>: $((p\to q)\to p)\to p$ [CCCpqpp]
* Combinators
    * <a href="CpCqp.html">K</a>: $p \to  (q\to p)$ [CpCqp]
    * <a href="CCpCqrCqCpr.html">C</a>: $(p\to (q\to r)) \to  (q\to (p\to r))$  [CCpCqrCqCpr]
    * <a href="CCpqCCrpCrq.html">B</a>: $(p\to q) \to  ((r\to p)\to (r\to q))$  [CCpqCCrpCrq]
    * <a href="CCpqCCqrCpr.html">B'</a>: $(p\to q) \to  ((q\to r)\to (p\to r))$ [CCpqCCqrCpr]
    * <a href="CCpCpqCpq.html">W</a>: $(p\to (p\to q)) \to  (p\to q)$ [CCpCpqCpq]
    * <a href="Cpp.html">I</a>: $p \to  p$ [Cpp]
    * <a href="CCpCqrCCpqCpr.html">S</a>: $(p\to (q\to r)) \to  ((p\to q)\to (p\to r))$ [CCpCqrCCpqCpr]

<h1>Modal Logic</h1>
Lewis systems:

* <a name="AS1.1" id="AS1.1">AS1.1</a>: $(p\land q) \Rightarrow   (q\land p)$ 
* <a name="AS1.2" id="AS1.2">AS1.2</a>: $(p\land q) \Rightarrow   p$
* <a name="AS1.3" id="AS1.3">AS1.3</a>: $p \Rightarrow   (p\land p)$
* <a name="AS1.4" id="AS1.4">AS1.4</a>: $((p\land q)\land r) \Rightarrow   (p\land (q\land r))$
* <a name="AS1.5" id="AS1.5">AS1.5</a>: $((p\Rightarrow  q)\land (q\Rightarrow  r)) \Rightarrow   (p\Rightarrow  r)$
* <a name="AS1.6" id="AS1.6">AS1.6</a>: $(p\land (p\Rightarrow  q)) \Rightarrow   q$
* <a name="AS4.1" id="AS4.1">AS4.1</a>: $\Box p \Rightarrow \Box \Box p$  (This is the strict form of <a href="CLLp.html">Axiom 4</a>)
* <a name="H1" id="H1">H1</a>: $p \Rightarrow   (p\land p)$
* <a name="H2" id="H2">H2</a>: $(p\land q) \Rightarrow   p$
* <a name="H3" id="H3">H3</a>: $((r\land p)\land \neg(q\land r)) \Rightarrow   (p\land \neg q)$
* <a name="H4" id="H4">H4</a>: $\neg \Diamond p \to \neg p$
* <a name="H5" id="H5">H5</a>: $p \Rightarrow \Diamond p$
* <a name="H6" id="H6">H6</a>: $(p\Rightarrow  q) \Rightarrow (\neg \Diamond q \Rightarrow  \neg \Diamond p)$
* <a name="H7" id="H7">H7</a>: $\Diamond\Diamond p \Rightarrow   \Diamond p$
* <a name="H8" id="H8">H8</a>: $\Diamond p \Rightarrow   \neg \Diamond \neg \Diamond p$
* <a href="MMp.html">MMp</a>: $\Diamond \Diamond p$
* <a name="SP" id="SP">S'</a>: $\Box \Diamond \Diamond p$
* <a name="SB" id="SB">Sb</a>: $\Diamond \Box \Diamond \Diamond p$
* <a name="S1" id="S1">S1</a>: $(\Box (p\to q)\land \Box (q\to r)) \to  \Box (p\to r)$
* <a name="S2" id="S2">S2</a>: $\Diamond (p\land q) \Rightarrow   (\Diamond p \land \Diamond q)$
* <a name="S3" id="S3">S3</a>: $(p\Rightarrow  q) \Rightarrow   (\neg \Diamond q \Rightarrow  \neg \Diamond p)$
    <!-- Corrected per note from Paul Hollander 2009-10-13
            It had been: $(p\Rightarrow  q) \Rightarrow   (\neg \Diamond \Rightarrow  \neg \Diamond$ )-->
* <a name="E3" id="E3">E3</a>: $\Box (p\to q) \to  \Box (\Box p \to \Box q)$

"Standard" Modal logics

* <a href="CLpqKLL.html">M</a>: $\Box (p\land q) \to  (\Box p \land \Box q)$
* <a href="EKLLLpq.html">C</a>: $(\Box p \land \Box q) \to  \Box (p\land q)$
* <a href="ECLLLpq.html">R</a>: $\Box (p\land q) \equiv  (\Box p \land \Box q)$
* <a href="CLpqCLL.html">K</a>: $\Box (p\to q) \to  (\Box p \to \Box q)$
* <a href="L.html">N</a>: $\Box (true)$
* <a href="CpLM.html">B</a>: $p \to  \Box \Diamond p$
* <a href="CLM.html">D</a>: $\Box p \to  \Diamond p$
* <a href="CLp.html">T</a>: $\Box p \to  p$
* <a href="CLLp.html">4</a>: $\Box p \to \Box \Box p$
* <a href="CMLM.html">5</a>: $\Diamond p \to  \Box \Diamond p$ [Hughes and Cresswell call this "E"]
* <a name="G1" id="G1">G1</a>: $\Diamond \Box p \to  \Box \Diamond$ <!-- CMpLMp -->
* <a name="MS" id="MS">MS</a>: $\Box \Diamond p \Rightarrow \Diamond \Box p$ [Hughes and Cresswell call this "M"] <!-- CLMMp -->
* <a name="N1" id="N1">N1</a>: $\Box (\Box (p\to \Box p)\to p) \to  (\Diamond \Box p\to p)$
* <a name="N1S" id="N1S">N1S</a>: $\Box (\Box (p\to \Box p)\to p) \Rightarrow   (\Diamond \Box p\to p)$
* <a name="D1" id="D1">D1</a>: $\Box (\Box p \to q) \lor  \Box (\Box q \to p)$
* <a name="F" id="F">F</a>: $(\Box \Diamond p \land  \Box \Diamond q) \to  \Diamond (p\land q)$
* <a name="W" id="W">W</a>: $\Box (\Box p \to p) \to \Box p$
* <a name="H" id="H">H</a>: $\Box (\Box p \equiv p) \to \Box p$
* <a name="M" id="M">Mp</a>: $\Diamond p$
* <a href="ELM.html">F</a>: $\Box p = \Diamond p$
* <a name="HCR1" id="HCR1">HCR1</a>: $\Diamond \Box p \to  (p\to \Box p)$
* <a name="TRIV" id="TRIV">Triv</a>: $p \equiv  \Box p$
* <a name="VER" id="VER">Ver</a>: $\Box p$


Misc. Lewis style axioms. (Following the numbering of
   <a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/bibliography.html#Zeman1973">[Zeman, 1973]</a>

* <a name="M" id="M">M1</a>: $(p\land q) \Rightarrow   (q\land p)$ [pg. 82] [Same as <a href="#AS1.1">AS1.1</a>]
* <a name="M" id="M">M2</a>: $(p\land q) \Rightarrow   p$ [pg. 82] [Same as <a href="#AS1.2">AS1.2</a>]
* <a name="M" id="M">M3</a>: $((p\land q)\land r) \Rightarrow   (p\land (q\land r))$ [pg. 82] [Same as <a href="#AS1.4">AS1.4</a>]
* <a name="M" id="M">M4</a>: $p \Rightarrow   (p\land p)$ [pg. 82] [Same as <a href="#AS1.3">AS1.3</a>]
* <a name="M" id="M">M5</a>: $((p\Rightarrow  q)\land (q\Rightarrow  r)) \Rightarrow   (p\Rightarrow  r)$ [pg. 82] [Same as <a href="#AS1.5">AS1.5</a>]
* <a name="M" id="M">M6</a>: $p \Rightarrow   \Diamond p$ [Same as <a href="#H5">H5</a>]
* <a name="M" id="M">M7</a>: $\Diamond (p\land q) \Rightarrow   p$
* <a name="M" id="M">M8</a>: $(p\Rightarrow  q) \Rightarrow   (\Diamond p \Rightarrow  \Diamond q)$ [pg. 161]
* <a name="M" id="M9">M9</a>: $\Diamond \Diamond p \Rightarrow  \Diamond p$  [pg. 178]
* <a name="M0" id="M10">M10</a>: $\Diamond p \Rightarrow   \Box \Diamond p$  [pg. 181] (This is the strict form of <a href="CMLM.html">5</a>) <!-- FMLM -->
* <a name="M3" id="M13">M13</a>: $\Box (\Box (p\to \Box p)\to p) \Rightarrow   (\Diamond \Box p\to p)$ (Same as <a href="#N1S">N1S</a>)
* <a name="M6" id="M16">M16</a>: $p \Rightarrow   (\Diamond \Box p\to \Box p)$ <!-- CpC\Diamond p\Box  -->
* <a name="M7" id="M17">M17</a>: $(\Box p \Rightarrow  q) \lor  (\Diamond \Box q\to p)$
* <a name="M8" id="M18">M18</a>: $(\Diamond \Box p\to p) \lor  (\Box \Diamond q\to \Diamond \Box q)$
* <a name="M4" id="M24">M24</a>: $\Box p \lor  ((p\Rightarrow  q) \lor  (p\Rightarrow  \neg q))$ <!-- ALAFpqFpNq-->

Sobocinski's

* <a name="NMKpqNp" id="NMKpqNp">F1</a>: $\neg \Diamond ((p\land q) \land  \neg p)$
* <a name="NMKpqNKqp" id="NMKpqNKqp">F2</a>: $\neg \Diamond ((p\land q) \land  \neg (q\land p)$
* <a name="NMKKpqrNKpKqr" id="NMKKpqrNKpKqr">F3</a>: $\neg \Diamond (((p\land q)\land r) \land  \neg (p\land (q\land r))$
* F4: $\neg \Diamond (p \land  \neg (p\land p))$ [Also known as Z1]
* <a name="NMKNMpNpNMqNrNNMpNr" id="NMKNMpNqNMqNrNNMpNr">F5</a>: $\neg \Diamond ((\neg \Diamond (p\land \neg q)\land \neg \Diamond (q\land \neg r)) \land  \neg  \neg \Diamond (p\land \neg r))$

[<a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/bibliography.html#Sobocinski">Soboci&#324;ski</a>,
    <a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/bibliography.html#Sobocinski1962">1962</a>, p53] 
   (With Soboci&#324;ski's typo of F2 fixed - JH)

Hacking's systems

* <a name="C1" id="C1">C1</a>: $p \Rightarrow   p$
* <a name="C2" id="C2">C2</a>: $(p\Rightarrow  (q\Rightarrow  r)) \Rightarrow   ((p\Rightarrow  q)\Rightarrow  (p\Rightarrow  r))$ [Clearly <a href="CCpCqrCCpqCpr.html">PL2</a> in strict form]
* <a name="C3b" id="C3b">C3b</a>: $(q\Rightarrow  r) \Rightarrow   ((p\Rightarrow  q)\Rightarrow  (p\Rightarrow  r))$
* <a name="C3a" id="C3a">C3a</a>: $a \Rightarrow   (b\Rightarrow  a)$ [Where $a$ and $b$ are both strict. (I.E. have the form $x \Rightarrow   y$)] [Clearly <a href="CpCqp.html">PL1</a> in strict and restricted form]
* <a name="C4" id="C4">C4</a>: $a \Rightarrow   (p\Rightarrow  a)$ [Where $a$ is strict (of the form $x\Rightarrow  y$)]

[<a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/bibliography.html#Sobocinski">Soboci&#324;ski</a>,
    <a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/bibliography.html#Sobocinski1962">1962</a>, p53]

* <a name="NMpNKpp" id="NMpNKpp">Z1</a>: $\neg \Diamond (p \land  \neg (p\land p))$ [Also known as F1]
* <a name="NMKpqNq" id="NMKpqNq">Z2</a>: $\neg \Diamond ((p\land q)\land \neg q)$
* <a name="NMKKrpNKqrNKpNq" id="NMKKrpNKqrNKpNq">Z3</a>: $\neg \Diamond (((r\land p)\land \neg (q\land r))\land \neg (p\land \neg q))$
* <a name="MNMpNqNNMNMNNM" id="MNMpNqNNMNMNNM">Z4</a>: $\neg (\neg \Diamond (p\land \neg q)\land \neg \neg \Diamond (\neg \Diamond q \land \neg \neg \Diamond p))$
* <a name="NKNMNNp" id="NKNMNNp">Z5</a>: $\neg (\neg \Diamond p \land \neg \neg p)$

von Wright's systems (Following Hilpinen's numbering)
    
* <a name="I1" id="I1">I1</a>: $P(r,s) \lor  P(\neg r,s)$
* <a name="I2" id="I2">I2</a>: $P(p\land q,r) \equiv  (P(p,r) \land  P(q,r\land p))$
* <a name="I3" id="I3">I3</a>: $O(p,r) \equiv  \neg P(\neg p,r)$
* <a name="K1" id="K1">K1</a>: $O(p\lor \neg p,r)$
* <a name="K2" id="K2">K2</a>: $\neg (O(p,r)\land O(\neg p,r))$
* <a name="K3" id="K3">K3</a>: $O(p\land q,r) \equiv  (O(p,r)\land O(q,r))$
* <a name="K4" id="K4">K4</a>: $O(p,r\lor s) \equiv  (O(p,r)\land O(p,s))$
* <a name="K5" id="K5">K5</a>: $P(p,r) \equiv  \neg O(\neg p,r)$<!-- ? -->
* <a name="vC1" id="vC1">vC1</a>: $Oq \equiv  \neg P\neg q$ <!-- EOqNPNq -->
* <a name="vC2" id="vC2">vC2</a>: $Pq \lor  P\neg q$ <!-- APqPnq -->
* <a name="vC3" id="vC3">vC3</a>: $P(q\lor r) \equiv  Pq \lor  Pr$
* <a name="vC4" id="vC4">vC4</a>: $O(q\land \neg q)$ is not valid. $\neg P(q\land \neg q)$ is not valid.
    (The principle of Deontic contingency)
* <a name="vC5" id="vC5">vC5</a>: If $q$ and $r$ are logically equivalent,
    then $Pq$ and $Pr$ are logically equivalent.
    
Misc. (Some of these really need names.)

* <a name="R1" id="R1">R1</a>: $(p\land q) \to  p$
* $(p \to  q) \to  (r \to  (p \to  q))$
* $(\neg \Diamond \neg p\Rightarrow  \Diamond p) \Rightarrow   (p\Rightarrow  \neg \Diamond \neg \Diamond p)$
* $\Diamond (\Diamond \Diamond p\to \Box \Diamond q) \to  (\Diamond \Diamond p\to \Box \Diamond q)$
   <a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/bibliography.html#Georgacarakos1978">[Georgacarakos, 1978, pg 103]</a>
* $\Box (\Box p \to  q) \lor  (\Box \Diamond \Box q \to  p)$
   [<a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/bibliography.html#Georgacarakos">Georgacarakos</a>,
    <a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/bibliography.html#Georgacarakos1977">1977</a>, pg 480]
* $(\Box \Diamond \Box p \land  q) \to  \Box (p \lor  \Diamond q)$
    [<a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/bibliography.html#Georgacarakos">Georgacarakos</a>,
    <a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/bibliography.html#Georgacarakos1977">1977</a>, p483]
* $(\Box (p\to q) \land  \Box (q\to r)) \to  \Box (p\to r)$
    [<a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/bibliography.html#Lemmon">Lemmon</a>,
     <a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/bibliography.html#Lemmon1957">1957</a>, p177]
* $\Box (p\to q) \to  \Box (\Box \Box p\to \Box q)$
    [<a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/bibliography.html#Lemmon">Lemmon</a>,
     <a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/bibliography.html#Lemmon1957">1957</a>, p177]
* $(p\to q) \to  ((q\to r)\to (p\to r))$
   [<a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/bibliography.html#HandB">Hilbert and Bernays</a>,
    <a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/bibliography.html#HandB1934">1934</a>, p68]
* $((p\to (p\to q)) \to  (p\to q)$
   [<a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/bibliography.html#HandB">Hilbert and Bernays</a>,
    <a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/bibliography.html#HandB1959">1959</a>, p39]
* $p \to  p$
   [<a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/bibliography.html#HandB">Hilbert and Bernays</a>,
    <a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/bibliography.html#HandB1959">1959</a>, p39]


<hr title="Crossreference"/><h1>Cross Reference</h1>

(Grossly in progress)

* Hilbert's PL1 = Russell and Whitehead's R1
    = Zeeman's <a href="CpCqp.html">C2</a>
    [<a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/bibliography.html#Zeman">Zeman</a>,
    <a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/bibliography.html#Zeman1973">1973</a>, pg 109]
    = Heyting's HA1
    


<hr title="Meta proof notes"/> <h1>Meta Proof Notes</h1>

If a system having the rule Modus Ponens for an operator $\to$,
   <b>and</b> can prove:
   
   * <a href="Cpp.html">I</a>: $p\to p$</a> [Cpp] (This is the "I" combinator)
   * <a href="CpCqp.html">PL1</a>: $p\to (q\to p)$</a> [CpCqp] (This is the K combinator)
   * <a href="CCpCqrCCpqCpr.html">PL2</a>: $(p\to (q\to r))\to ((p\to q)\to (p\to r))$</a> [CCpCqrCCpqCpr] (This is the S combinator)
   
Then it has the Deduction theorem, and therefore allows hypothetical syllogism.
   [<a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/bibliography.html#Hackstaff">Hackstaff</a>,
    <a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/bibliography.html#Hackstaff1966">1966</a>, p121]

Note that the first axiom $p\to p$ [Cpp] is actually provable from
   PL1 and PL2, given the rules modus ponens (for $\to$) and universal
   substitution.

Any system having Modus Ponens for an implicational operator $\to$ 
and the theorem $(A \to  (B \to  (A \land  B)))$ has the derived rule of
Adjunction for $\land$.
[<a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/bibliography.html#Simons">Simons</a>,
 <a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/bibliography.html#Simons1953">1953</a>, p313]

<hr title="Navigation"/><h1>Go to ...</h1>

* <a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/rules/index.html">Rules page</a>
* <a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/systems/index.html">Systems page</a>
* <a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/index.html">Logic Structures Page</a>
* <a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/index.html">Logic Page</a>
* <a href="/web/20190607220511/http://home.utah.edu/~nahaj/index.html">John Halleck's Home Page</a>

<hr title="Page Maintenance"/>
<pre><tt>&copy; Copyright 2006-2010 by John Halleck, All Rights Reserved.
This page is http://www.cc.utah.edu/\neg <a href="/web/20190607220511/http://home.utah.edu/~nahaj/index.html">nahaj</a>/<a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/index.html">logic</a>/<a href="/web/20190607220511/http://home.utah.edu/~nahaj/logic/structures/index.html">structures</a>/<a href="index.html">axioms</a>/index.html
This page was last modified on October 13th, 2009.</tt></pre>
</body></html>
