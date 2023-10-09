import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { MultipleSelectChip } from "../selectorChip/selectorChip";
import { fetchMusiciansData } from "../../../redux/actions/catalog/musician";
import { mapMusicianOptions } from "../../../common/utils/catalog/maping";
import { MultipleSelectCheckmarks } from "../selectorCheckBox/selectorCheckBox";

interface IMusicianSelectorChip {
  selectedOptions: string[];
  label: string;
  name: string;
  onChange: (value: string[], name: string) => void;
}

export const MusicianSelectorChip: React.FC<IMusicianSelectorChip> = ({
  selectedOptions,
  label,
  name,
  onChange,
}) => {
  
  const { loading, data } = useAppSelector((state) => state.catalog.musician);
  const dispatch = useAppDispatch();
 
  useEffect(() => {
    data === undefined && dispatch(fetchMusiciansData());
  }, [data]);

  return (
    <MultipleSelectCheckmarks
      disabled={loading}
      options={mapMusicianOptions(data ?? [])}
      selectedKeys={selectedOptions}
      label={label}
      name={name}
      onChange={onChange}
    />
  );
};
