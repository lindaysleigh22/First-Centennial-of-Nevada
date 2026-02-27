import imgGroup from "figma:asset/4f83f318661295cba36b785b02fb7febec1c8e1e.png";
import imgGroup1 from "figma:asset/9042e72de1f9db3f5a13e3e65e1561376141ca70.png";

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGroup} />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGroup1} />
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group3 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Mask group">
      <Group2 />
      <Group4 />
    </div>
  );
}

export default function Tree() {
  return (
    <div className="relative size-full" data-name="TREE 1">
      <MaskGroup />
    </div>
  );
}
